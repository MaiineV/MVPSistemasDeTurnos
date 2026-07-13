/* =========================================================
   Wizard de reserva · turnos.html
   Pide disponibilidad a PeluStore (el "backend" del demo)
   y guía: servicio → profesional → fecha/hora → datos.
   ========================================================= */
(function () {
  "use strict";

  var CFG = window.PELU_CONFIG || {};
  var S = window.PeluStore;
  var H = S.helpers;

  var STEPS = ["service", "staff", "datetime", "details", "done"];
  var state = {
    serviceId: null,
    staffId: null,      // id concreto o "any"
    resolvedStaff: null, // staff real cuando se elige "any"
    date: null,
    time: null,
    name: "",
    phone: "",
    booking: null,
  };

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function announce(msg) {
    var live = $("[data-live]");
    if (live) live.textContent = msg;
  }

  function findService(id) { return (CFG.services || []).find(function (s) { return s.id === id; }); }
  function findStaff(id) { return (CFG.staff || []).find(function (m) { return m.id === id; }); }

  /* ---------- Navegación entre pasos ---------- */
  function showStep(name) {
    var idx = STEPS.indexOf(name);
    $$("[data-step]").forEach(function (sec) {
      sec.hidden = sec.getAttribute("data-step") !== name;
    });
    $$("[data-steps] li").forEach(function (li, i) {
      li.removeAttribute("aria-current");
      li.removeAttribute("data-done");
      if (i === idx && idx < 4) li.setAttribute("aria-current", "step");
      if (i < idx) li.setAttribute("data-done", "");
    });
    if (name === "done") $("[data-steps]").hidden = true;
    var heading = $('[data-step="' + name + '"] h2');
    if (heading) heading.focus();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* ---------- Paso 1: servicios ---------- */
  function renderServiceStep() {
    var wrap = $("[data-service-list]");
    wrap.innerHTML = "";
    (CFG.services || []).forEach(function (svc) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-card";
      btn.setAttribute("aria-pressed", "false");

      var h3 = document.createElement("h3");
      h3.textContent = svc.name;
      var p = document.createElement("p");
      p.textContent = svc.desc || "";
      var meta = document.createElement("p");
      meta.className = "option-card__meta";
      meta.textContent = H.fmtMoney(svc.price) + " · " + svc.duration + " min";

      btn.appendChild(h3);
      btn.appendChild(p);
      btn.appendChild(meta);
      btn.addEventListener("click", function () {
        state.serviceId = svc.id;
        state.date = null;
        state.time = null;
        renderStaffStep();
        showStep("staff");
      });
      wrap.appendChild(btn);
    });
  }

  /* ---------- Paso 2: profesional ---------- */
  function renderStaffStep() {
    var wrap = $("[data-staff-list]");
    wrap.innerHTML = "";

    var options = (CFG.staff || []).map(function (m) {
      return { id: m.id, title: m.name, sub: m.role || "" };
    });
    if (options.length > 1) {
      options.push({ id: "any", title: "Cualquiera", sub: "El primero que tenga lugar" });
    }

    options.forEach(function (opt) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-card";
      var h3 = document.createElement("h3");
      h3.textContent = opt.title;
      var p = document.createElement("p");
      p.textContent = opt.sub;
      btn.appendChild(h3);
      btn.appendChild(p);
      btn.addEventListener("click", function () {
        state.staffId = opt.id;
        state.date = null;
        state.time = null;
        renderDayStrip();
        showStep("datetime");
      });
      wrap.appendChild(btn);
    });
  }

  /* ---------- Paso 3: día y hora ---------- */
  function renderDayStrip() {
    var strip = $("[data-day-strip]");
    strip.innerHTML = "";
    resetSlotArea();

    var today = H.todayStr();
    var windowDays = (CFG.booking && CFG.booking.windowDays) || 14;

    for (var i = 0; i < windowDays; i++) {
      var date = H.addDays(today, i);
      var open = !!H.dayRanges(date);
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.setAttribute("aria-pressed", "false");
      chip.disabled = !open;

      var d = date;
      var dayName = document.createElement("span");
      dayName.className = "chip__day";
      dayName.textContent = i === 0 ? "Hoy" : i === 1 ? "Mañana" : H.fmtDateShort(date).split(",")[0];
      var num = document.createElement("span");
      num.className = "chip__num";
      num.textContent = date.split("-")[2];
      var st = document.createElement("span");
      st.className = "chip__state";
      st.textContent = open ? "" : "Cerrado";

      chip.appendChild(dayName);
      chip.appendChild(num);
      chip.appendChild(st);
      if (open) {
        chip.addEventListener("click", (function (dd, el) {
          return function () {
            $$(".chip", strip).forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
            el.setAttribute("aria-pressed", "true");
            state.date = dd;
            state.time = null;
            loadSlots(dd);
          };
        })(d, chip));
      }
      strip.appendChild(chip);
    }
  }

  function resetSlotArea() {
    $("[data-slot-area]").innerHTML = '<p class="empty-note">Elegí un día para ver los horarios disponibles.</p>';
  }

  function showSkeleton() {
    var area = $("[data-slot-area]");
    area.innerHTML = "";
    var group = document.createElement("div");
    group.className = "slot-group";
    var row = document.createElement("div");
    row.className = "skeleton-row";
    for (var i = 0; i < 8; i++) {
      var sk = document.createElement("span");
      sk.className = "skeleton";
      row.appendChild(sk);
    }
    group.appendChild(row);
    area.appendChild(group);
  }

  function loadSlots(date) {
    showSkeleton();
    announce("Buscando horarios para " + H.fmtDateLong(date));

    var done = function (slots, resolver) {
      renderSlots(date, slots, resolver);
    };

    if (state.staffId === "any") {
      S.getAvailabilityAll({ serviceId: state.serviceId, date: date }).then(function (byStaff) {
        // unión de horarios; para cada hora elegimos el staff con más lugar
        var union = {};
        Object.keys(byStaff).forEach(function (staffId) {
          byStaff[staffId].forEach(function (t) {
            if (!union[t]) union[t] = [];
            union[t].push(staffId);
          });
        });
        var slots = Object.keys(union).sort();
        done(slots, function (time) {
          var candidates = union[time];
          // el que tenga más slots libres en el día (reparte la carga)
          candidates.sort(function (a, b) { return byStaff[b].length - byStaff[a].length; });
          return candidates[0];
        });
      });
    } else {
      S.getAvailability({ serviceId: state.serviceId, staffId: state.staffId, date: date }).then(function (slots) {
        done(slots, function () { return state.staffId; });
      });
    }
  }

  function renderSlots(date, slots, resolveStaff) {
    var area = $("[data-slot-area]");
    area.innerHTML = "";

    if (!slots.length) {
      area.innerHTML = '<p class="empty-note">No quedan horarios para <strong>' +
        H.fmtDateLong(date) + "</strong>. Probá otro día.</p>";
      announce("Sin horarios disponibles para " + H.fmtDateLong(date));
      return;
    }

    var groups = [
      { label: "Mañana", test: function (t) { return t < "13:00"; }, items: [] },
      { label: "Tarde", test: function (t) { return t >= "13:00"; }, items: [] },
    ];
    slots.forEach(function (t) {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i].test(t)) { groups[i].items.push(t); break; }
      }
    });

    groups.forEach(function (g) {
      if (!g.items.length) return;
      var box = document.createElement("div");
      box.className = "slot-group";
      var h4 = document.createElement("h4");
      h4.textContent = g.label;
      var grid = document.createElement("div");
      grid.className = "slot-grid";
      g.items.forEach(function (t) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "slot";
        b.textContent = t;
        b.setAttribute("aria-pressed", "false");
        b.addEventListener("click", function () {
          $$(".slot", area).forEach(function (s) { s.setAttribute("aria-pressed", "false"); });
          b.setAttribute("aria-pressed", "true");
          state.time = t;
          state.resolvedStaff = resolveStaff(t);
          renderSummary($("[data-summary]"));
          showStep("details");
          var nameInput = $("#bk-name");
          if (nameInput && !nameInput.value) nameInput.focus();
        });
        grid.appendChild(b);
      });
      box.appendChild(h4);
      box.appendChild(grid);
      area.appendChild(box);
    });

    announce(slots.length + " horarios disponibles para " + H.fmtDateLong(date));
  }

  /* ---------- Paso 4: resumen + datos ---------- */
  function summaryRows() {
    var svc = findService(state.serviceId) || {};
    var member = findStaff(state.resolvedStaff) || {};
    return [
      ["Servicio", svc.name || "—"],
      ["Con", member.name || "—"],
      ["Día", state.date ? H.fmtDateLong(state.date) : "—"],
      ["Hora", state.time || "—"],
      ["Precio", svc.price != null ? H.fmtMoney(svc.price) : "—"],
    ];
  }

  function renderSummary(dl) {
    if (!dl) return;
    dl.innerHTML = "";
    summaryRows().forEach(function (row) {
      var div = document.createElement("div");
      var dt = document.createElement("dt");
      dt.textContent = row[0];
      var dd = document.createElement("dd");
      dd.textContent = row[1];
      div.appendChild(dt);
      div.appendChild(dd);
      dl.appendChild(div);
    });
  }

  function wireForm() {
    var form = $("[data-booking-form]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var nameField = $('[data-field="name"]');
      var phoneField = $('[data-field="phone"]');
      var name = $("#bk-name").value.trim();
      var phone = $("#bk-phone").value.trim();

      nameField.toggleAttribute("data-invalid", !name);
      phoneField.toggleAttribute("data-invalid", phone.replace(/\D/g, "").length < 8);
      if (!name || phone.replace(/\D/g, "").length < 8) return;

      state.name = name;
      state.phone = phone;

      var submit = $("[data-submit]");
      var formError = $("[data-form-error]");
      formError.style.display = "none";
      submit.classList.add("btn--loading");
      submit.disabled = true;

      S.createBooking({
        serviceId: state.serviceId,
        staffId: state.resolvedStaff,
        date: state.date,
        time: state.time,
        name: name,
        phone: phone,
        source: "web",
      }).then(function (booking) {
        state.booking = booking;
        renderSummary($("[data-summary-done]"));
        wireWaConfirm(booking);
        showStep("done");
        announce("Turno reservado para " + H.fmtDateLong(booking.date) + " a las " + booking.time);
      }).catch(function (err) {
        if (err && err.code === "SLOT_TAKEN") {
          formError.textContent = "Ese horario se acaba de ocupar. Elegí otro, por favor.";
          formError.style.display = "block";
          state.time = null;
          renderDayStrip();
          showStep("datetime");
        } else {
          formError.textContent = "No pudimos guardar la reserva. Probá de nuevo.";
          formError.style.display = "block";
        }
      }).finally(function () {
        submit.classList.remove("btn--loading");
        submit.disabled = false;
      });
    });
  }

  /* ---------- Confirmación → WhatsApp ---------- */
  function wireWaConfirm(booking) {
    var el = $("[data-wa-confirm]");
    var phone = (CFG.business || {}).whatsapp;
    if (!el || !phone) { if (el) el.style.display = "none"; return; }
    var msg = "Hola! Reservé un turno: " + booking.serviceName +
      " con " + booking.staffName +
      " el " + H.fmtDateLong(booking.date) + " a las " + booking.time + ".";
    el.setAttribute("href", "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  }

  /* ---------- Botones "Atrás" ---------- */
  function wireBack() {
    $$("[data-back]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var current = btn.closest("[data-step]").getAttribute("data-step");
        var idx = STEPS.indexOf(current);
        if (idx > 0) showStep(STEPS[idx - 1]);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderServiceStep();
    wireForm();
    wireBack();
    showStep("service");
  });
})();

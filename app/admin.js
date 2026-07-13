/* =========================================================
   Panel admin · admin.html
   Login demo (cualquier credencial entra), tabs:
   Agenda · Reservas · Clientes · Caja. Todo contra
   PeluStore (el "backend" simulado del demo).
   ========================================================= */
(function () {
  "use strict";

  var CFG = window.PELU_CONFIG || {};
  var S = window.PeluStore;
  var H = S.helpers;

  var SESSION_KEY = "pelu:" + (CFG.slug || "demo") + ":session";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var STATUS_LABEL = {
    "pendiente": "Pendiente", "confirmado": "Confirmado", "completado": "Completado",
    "cancelado": "Cancelado", "no-show": "No vino",
  };

  /* Día seleccionado (compartido por Agenda y Caja).
     Si hoy está cerrado, arranca en el último día abierto
     así el demo nunca se ve vacío. */
  function lastOpenDay() {
    var d = H.todayStr();
    for (var i = 0; i < 7; i++) {
      if (H.dayRanges(d)) return d;
      d = H.addDays(d, -1);
    }
    return H.todayStr();
  }

  var state = {
    tab: "agenda",
    date: lastOpenDay(),
  };

  function announce(msg) {
    var live = $("[data-live]");
    if (live) live.textContent = msg;
  }

  function badge(status) {
    var span = document.createElement("span");
    span.className = "badge badge--" + status;
    span.textContent = STATUS_LABEL[status] || status;
    return span;
  }

  /* =========================================
     Login demo
     ========================================= */
  function isLogged() {
    try { return sessionStorage.getItem(SESSION_KEY) === "1"; }
    catch (e) { return window.__peluSession === true; }
  }
  function setLogged(v) {
    try {
      if (v) sessionStorage.setItem(SESSION_KEY, "1");
      else sessionStorage.removeItem(SESSION_KEY);
    } catch (e) { window.__peluSession = v; }
  }

  function showShell() {
    $("[data-login]").hidden = true;
    $("[data-shell]").hidden = false;
    renderCurrentTab();
  }

  function wireLogin() {
    var form = $("[data-login-form]");
    var submit = $("[data-login-submit]");

    function doLogin() {
      submit.classList.add("btn--loading");
      submit.disabled = true;
      setTimeout(function () { // "verificando…" de mentira, para que se sienta real
        setLogged(true);
        showShell();
      }, 600);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      doLogin();
    });
    $("[data-login-demo]").addEventListener("click", function () {
      $("#login-user").value = "demo";
      $("#login-pass").value = "demo";
      doLogin();
    });
    $("[data-logout]").addEventListener("click", function () {
      setLogged(false);
      location.reload();
    });
  }

  /* =========================================
     Tabs + fecha
     ========================================= */
  function renderCurrentTab() {
    if (state.tab === "agenda") renderAgenda();
    else if (state.tab === "reservas") renderBookingsTable();
    else if (state.tab === "clientes") renderClients();
    else if (state.tab === "caja") renderCaja();
  }

  function wireTabs() {
    $$("[data-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.tab = btn.getAttribute("data-tab");
        $$("[data-tab]").forEach(function (b) { b.setAttribute("aria-selected", String(b === btn)); });
        $$("[data-panel]").forEach(function (p) {
          p.hidden = p.getAttribute("data-panel") !== state.tab;
        });
        renderCurrentTab();
      });
    });
  }

  function updateDateWidgets() {
    $$("[data-date-label]").forEach(function (el) { el.textContent = H.fmtDateLong(state.date); });
    $$("[data-date-input]").forEach(function (el) { el.value = state.date; });
  }

  function wireDateNav() {
    $$("[data-date-prev]").forEach(function (b) {
      b.addEventListener("click", function () { state.date = H.addDays(state.date, -1); updateDateWidgets(); renderCurrentTab(); });
    });
    $$("[data-date-next]").forEach(function (b) {
      b.addEventListener("click", function () { state.date = H.addDays(state.date, 1); updateDateWidgets(); renderCurrentTab(); });
    });
    $$("[data-date-today]").forEach(function (b) {
      b.addEventListener("click", function () { state.date = H.todayStr(); updateDateWidgets(); renderCurrentTab(); });
    });
    $$("[data-date-input]").forEach(function (inp) {
      inp.addEventListener("change", function () {
        if (inp.value) { state.date = inp.value; updateDateWidgets(); renderCurrentTab(); }
      });
    });
  }

  /* =========================================
     Agenda
     ========================================= */
  function renderAgenda() {
    updateDateWidgets();
    var grid = $("[data-agenda]");
    grid.innerHTML = '<div class="agenda-col"><div class="skeleton-row"><span class="skeleton"></span><span class="skeleton"></span></div></div>';

    S.listBookings({ date: state.date }).then(function (bookings) {
      grid.innerHTML = "";

      if (!H.dayRanges(state.date)) {
        grid.innerHTML = '<p class="empty-note">El local está cerrado este día.</p>';
        return;
      }

      (CFG.staff || []).forEach(function (member) {
        var col = document.createElement("div");
        col.className = "agenda-col";
        var items = bookings.filter(function (b) { return b.staffId === member.id; });

        var h3 = document.createElement("h3");
        h3.textContent = member.name;
        var small = document.createElement("small");
        small.textContent = items.length ? items.length + " turnos" : "Sin turnos";
        h3.appendChild(small);
        col.appendChild(h3);

        var list = document.createElement("div");
        list.className = "agenda-list";
        if (!items.length) {
          var empty = document.createElement("p");
          empty.className = "empty-note";
          empty.textContent = "Día libre.";
          list.appendChild(empty);
        }
        items.forEach(function (b) {
          var item = document.createElement("button");
          item.type = "button";
          item.className = "agenda-item";

          var time = document.createElement("span");
          time.className = "agenda-item__time";
          time.textContent = b.time;

          var who = document.createElement("span");
          who.className = "agenda-item__who";
          var name = document.createElement("strong");
          name.textContent = b.clientName;
          var svc = document.createElement("span");
          svc.textContent = b.serviceName + " · " + b.duration + " min";
          who.appendChild(name);
          who.appendChild(svc);

          item.appendChild(time);
          item.appendChild(who);
          item.appendChild(badge(b.status));
          item.addEventListener("click", function () { openBookingDialog(b); });
          list.appendChild(item);
        });
        col.appendChild(list);
        grid.appendChild(col);
      });
    });
  }

  /* =========================================
     Reservas (tabla con filtros)
     ========================================= */
  function renderBookingsTable() {
    var tbody = $("[data-bookings-table]");
    tbody.innerHTML = '<tr><td colspan="7" class="muted">Cargando…</td></tr>';

    var range = $("[data-filter-range]").value;
    var status = $("[data-filter-status]").value;
    var today = H.todayStr();
    var filters = {};
    if (status) filters.status = status;
    if (range === "upcoming") filters.from = today;
    if (range === "past") filters.to = H.addDays(today, -1);

    S.listBookings(filters).then(function (bookings) {
      if (range === "past") bookings.reverse(); // pasadas: más recientes primero
      tbody.innerHTML = "";
      if (!bookings.length) {
        tbody.innerHTML = '<tr><td colspan="7" class="muted">No hay reservas con esos filtros.</td></tr>';
        return;
      }
      bookings.slice(0, 120).forEach(function (b) {
        var tr = document.createElement("tr");
        function td(content, cls) {
          var cell = document.createElement("td");
          if (cls) cell.className = cls;
          if (typeof content === "string") cell.textContent = content;
          else cell.appendChild(content);
          return cell;
        }
        tr.appendChild(td(H.fmtDateShort(b.date)));
        tr.appendChild(td(b.time));
        tr.appendChild(td(b.clientName));
        tr.appendChild(td(b.serviceName));
        tr.appendChild(td(b.staffName));
        tr.appendChild(td(badge(b.status)));
        tr.appendChild(td(H.fmtMoney(b.price), "table__money"));
        tr.addEventListener("click", function () { openBookingDialog(b); });
        tbody.appendChild(tr);
      });
    });
  }

  /* =========================================
     Clientes ("cuentas")
     ========================================= */
  function renderClients() {
    var tbody = $("[data-clients-table]");
    tbody.innerHTML = '<tr><td colspan="5" class="muted">Cargando…</td></tr>';
    var q = $("[data-client-search]").value;

    S.listClients(q).then(function (clients) {
      tbody.innerHTML = "";
      if (!clients.length) {
        tbody.innerHTML = '<tr><td colspan="5" class="muted">Sin resultados.</td></tr>';
        return;
      }
      clients.forEach(function (c) {
        var tr = document.createElement("tr");
        function td(text, cls) {
          var cell = document.createElement("td");
          if (cls) cell.className = cls;
          cell.textContent = text;
          return cell;
        }
        tr.appendChild(td(c.name));
        tr.appendChild(td(c.phone));
        tr.appendChild(td(String(c.visits)));
        tr.appendChild(td(c.lastVisit ? H.fmtDateShort(c.lastVisit) : "—"));
        tr.appendChild(td(H.fmtMoney(c.totalSpent), "table__money"));
        tr.addEventListener("click", function () { openClientDialog(c); });
        tbody.appendChild(tr);
      });
    });
  }

  function openClientDialog(client) {
    var dlg = $("[data-client-dialog]");
    $("[data-client-name]").textContent = client.name;

    var detail = $("[data-client-detail]");
    detail.innerHTML = "";
    [["Teléfono", client.phone],
     ["Visitas", String(client.visits)],
     ["Total gastado", H.fmtMoney(client.totalSpent)],
     ["Notas", client.notes || "—"]].forEach(function (row) {
      var div = document.createElement("div");
      var dt = document.createElement("dt"); dt.textContent = row[0];
      var dd = document.createElement("dd"); dd.textContent = row[1];
      div.appendChild(dt); div.appendChild(dd);
      detail.appendChild(div);
    });

    var tbody = $("[data-client-history]");
    tbody.innerHTML = '<tr><td colspan="3" class="muted">Cargando…</td></tr>';
    S.getClientHistory(client.id).then(function (history) {
      tbody.innerHTML = "";
      history.slice(0, 15).forEach(function (b) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td"); td1.textContent = H.fmtDateShort(b.date);
        var td2 = document.createElement("td"); td2.textContent = b.serviceName;
        var td3 = document.createElement("td"); td3.appendChild(badge(b.status));
        tr.appendChild(td1); tr.appendChild(td2); tr.appendChild(td3);
        tbody.appendChild(tr);
      });
    });
    dlg.showModal();
  }

  /* =========================================
     Caja (punto de venta)
     ========================================= */
  function renderCaja() {
    updateDateWidgets();
    var statsWrap = $("[data-caja-stats]");
    var pendingWrap = $("[data-caja-pending]");
    var salesBody = $("[data-sales-table]");
    statsWrap.innerHTML = '<div class="stat-card"><span class="skeleton" style="width:100%"></span></div>';
    pendingWrap.innerHTML = "";
    salesBody.innerHTML = '<tr><td colspan="5" class="muted">Cargando…</td></tr>';

    Promise.all([
      S.getDailySummary(state.date),
      S.listBookings({ date: state.date }),
    ]).then(function (results) {
      var summary = results[0];
      var bookings = results[1];

      /* ---- stats ---- */
      statsWrap.innerHTML = "";
      var methods = (CFG.pos && CFG.pos.paymentMethods) || [];
      function statCard(label, value, hint) {
        var card = document.createElement("div");
        card.className = "stat-card";
        var l = document.createElement("p"); l.className = "stat-card__label"; l.textContent = label;
        var v = document.createElement("p"); v.className = "stat-card__value"; v.textContent = value;
        card.appendChild(l); card.appendChild(v);
        if (hint) { var h = document.createElement("p"); h.className = "stat-card__hint"; h.textContent = hint; card.appendChild(h); }
        return card;
      }
      var methodHint = methods.map(function (m) {
        return m.name + " " + H.fmtMoney(summary.byMethod[m.id] || 0);
      }).join(" · ");
      var staffHint = (CFG.staff || []).map(function (m) {
        return m.name + " " + H.fmtMoney(summary.byStaff[m.id] || 0);
      }).join(" · ");

      statsWrap.appendChild(statCard("Total del día", H.fmtMoney(summary.total), methodHint));
      statsWrap.appendChild(statCard("Cobros", String(summary.count), staffHint));
      statsWrap.appendChild(statCard("Ticket promedio", H.fmtMoney(summary.avgTicket)));

      /* ---- por cobrar ---- */
      var pending = bookings.filter(function (b) {
        return (b.status === "pendiente" || b.status === "confirmado") && !b.paid;
      });
      pendingWrap.innerHTML = "";
      if (!pending.length) {
        pendingWrap.innerHTML = '<p class="empty-note">No hay turnos por cobrar este día.</p>';
      } else {
        var list = document.createElement("div");
        list.className = "agenda-list";
        pending.forEach(function (b) {
          var item = document.createElement("button");
          item.type = "button";
          item.className = "agenda-item";
          var time = document.createElement("span"); time.className = "agenda-item__time"; time.textContent = b.time;
          var who = document.createElement("span"); who.className = "agenda-item__who";
          var name = document.createElement("strong"); name.textContent = b.clientName;
          var svc = document.createElement("span"); svc.textContent = b.serviceName + " · " + b.staffName + " · " + H.fmtMoney(b.price);
          who.appendChild(name); who.appendChild(svc);
          item.appendChild(time); item.appendChild(who); item.appendChild(badge(b.status));
          item.addEventListener("click", function () { openBookingDialog(b, true); });
          list.appendChild(item);
        });
        pendingWrap.appendChild(list);
      }

      /* ---- cobros del día ---- */
      salesBody.innerHTML = "";
      if (!summary.sales.length) {
        salesBody.innerHTML = '<tr><td colspan="5" class="muted">Todavía no hay cobros este día.</td></tr>';
      }
      var methodName = {};
      methods.forEach(function (m) { methodName[m.id] = m.name; });
      summary.sales.forEach(function (sale) {
        var tr = document.createElement("tr");
        function td(text, cls) {
          var cell = document.createElement("td");
          if (cls) cell.className = cls;
          cell.textContent = text;
          return cell;
        }
        var staffMember = (CFG.staff || []).find(function (m) { return m.id === sale.staffId; });
        tr.appendChild(td(sale.time));
        tr.appendChild(td(sale.items.map(function (i) { return i.name; }).join(", ")));
        tr.appendChild(td(staffMember ? staffMember.name : "—"));
        tr.appendChild(td(methodName[sale.paymentMethodId] || sale.paymentMethodId));
        tr.appendChild(td(H.fmtMoney(sale.total), "table__money"));
        tr.style.cursor = "default";
        salesBody.appendChild(tr);
      });
    });
  }

  /* =========================================
     Dialog de reserva (acciones + cobro)
     ========================================= */
  function openBookingDialog(b, chargeFocus) {
    var dlg = $("[data-booking-dialog]");
    var detail = $("[data-booking-detail]");
    var actions = $("[data-booking-actions]");
    var methodWrap = $("[data-charge-method-wrap]");
    var methodSel = $("#charge-method");

    detail.innerHTML = "";
    [["Cliente", b.clientName],
     ["Teléfono", b.clientPhone || "—"],
     ["Servicio", b.serviceName],
     ["Profesional", b.staffName],
     ["Día", H.fmtDateLong(b.date)],
     ["Hora", b.time + " (" + b.duration + " min)"],
     ["Precio", H.fmtMoney(b.price)],
     ["Estado", STATUS_LABEL[b.status] || b.status]].forEach(function (row) {
      var div = document.createElement("div");
      var dt = document.createElement("dt"); dt.textContent = row[0];
      var dd = document.createElement("dd"); dd.textContent = row[1];
      div.appendChild(dt); div.appendChild(dd);
      detail.appendChild(div);
    });

    /* método de pago (solo si se puede cobrar) */
    var canCharge = (b.status === "pendiente" || b.status === "confirmado") && !b.paid;
    methodWrap.hidden = !canCharge;
    if (canCharge) {
      methodSel.innerHTML = "";
      ((CFG.pos && CFG.pos.paymentMethods) || []).forEach(function (m) {
        var opt = document.createElement("option");
        opt.value = m.id;
        opt.textContent = m.name;
        methodSel.appendChild(opt);
      });
    }

    actions.innerHTML = "";
    function actionBtn(label, cls, fn) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn " + cls;
      btn.textContent = label;
      btn.addEventListener("click", function () {
        btn.classList.add("btn--loading");
        fn().then(function () {
          dlg.close();
          renderCurrentTab();
        }).catch(function (err) {
          btn.classList.remove("btn--loading");
          alert(err && err.message ? err.message : "No se pudo completar la acción.");
        });
      });
      return btn;
    }

    if (b.status === "pendiente") {
      actions.appendChild(actionBtn("Confirmar", "btn--solid", function () {
        return S.updateBookingStatus(b.id, "confirmado").then(function () { announce("Turno confirmado"); });
      }));
    }
    if (canCharge) {
      actions.appendChild(actionBtn("Cobrar " + H.fmtMoney(b.price), "btn--solid", function () {
        return S.chargeBooking({ bookingId: b.id, paymentMethodId: methodSel.value }).then(function () { announce("Cobro registrado"); });
      }));
    }
    if (b.status === "pendiente" || b.status === "confirmado") {
      actions.appendChild(actionBtn("No vino", "btn--ghost", function () {
        return S.updateBookingStatus(b.id, "no-show");
      }));
      actions.appendChild(actionBtn("Cancelar turno", "btn--ghost", function () {
        return S.updateBookingStatus(b.id, "cancelado");
      }));
    }
    if (!actions.children.length) {
      var done = document.createElement("p");
      done.className = "muted";
      done.textContent = b.paid ? "Turno cobrado." : "Sin acciones disponibles.";
      actions.appendChild(done);
    }

    dlg.showModal();
    if (chargeFocus && canCharge) methodSel.focus();
  }

  function wireDialogs() {
    $$("dialog.app-dialog").forEach(function (dlg) {
      $$("[data-dialog-close]", dlg).forEach(function (btn) {
        btn.addEventListener("click", function () { dlg.close(); });
      });
      dlg.addEventListener("click", function (e) {
        if (e.target === dlg) dlg.close(); // click en el backdrop
      });
    });
  }

  /* =========================================
     Filtros / búsqueda / reset / sync
     ========================================= */
  function wireFilters() {
    $("[data-filter-range]").addEventListener("change", renderBookingsTable);
    $("[data-filter-status]").addEventListener("change", renderBookingsTable);

    var searchTimer;
    $("[data-client-search]").addEventListener("input", function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(renderClients, 250);
    });
  }

  function wireReset() {
    $("[data-reset]").addEventListener("click", function () {
      if (!confirm("¿Reiniciar la demo? Se regeneran todos los datos de ejemplo.")) return;
      S.resetDemo().then(function () { location.reload(); });
    });
  }

  /* Reservan en turnos.html (otra pestaña) → la agenda se actualiza sola */
  function wireCrossTabSync() {
    window.addEventListener("storage", function (e) {
      if (e.key === H.storeKey && isLogged()) renderCurrentTab();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireLogin();
    wireTabs();
    wireDateNav();
    wireDialogs();
    wireFilters();
    wireReset();
    wireCrossTabSync();
    updateDateWidgets();
    if (isLogged()) showShell();
  });
})();

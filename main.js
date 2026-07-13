/* =========================================================
   Peluquería · interacciones + hidratación desde config.js
   Vanilla JS, sin dependencias. Los datos del negocio viven
   en config.js (window.PELU_CONFIG) — este archivo solo lee.
   Se carga en las tres páginas (index, turnos, admin); cada
   función chequea que existan sus elementos antes de actuar.
   ========================================================= */
(function () {
  "use strict";

  var CFG = window.PELU_CONFIG || {};
  var BIZ = CFG.business || {};
  var BOOKING_ON = !!(CFG.booking && CFG.booking.enabled);

  /* ---- Helper: leer "a.b.c" del config ---- */
  function cfgPath(path) {
    var node = CFG;
    var parts = path.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return undefined;
      node = node[parts[i]];
    }
    return node;
  }

  /* ---- Textos sueltos: <span data-cfg="business.name"> ---- */
  function hydrateTexts() {
    document.querySelectorAll("[data-cfg]").forEach(function (el) {
      var val = cfgPath(el.getAttribute("data-cfg"));
      if (val !== undefined && val !== null) el.textContent = val;
    });
  }

  /* ---- Teléfono, mapa, Instagram, dirección ---- */
  function hydrateContacts() {
    document.querySelectorAll("[data-cfg-tel]").forEach(function (el) {
      if (BIZ.phoneE164) el.setAttribute("href", "tel:" + BIZ.phoneE164);
      if (BIZ.phoneDisplay) el.textContent = BIZ.phoneDisplay;
    });
    document.querySelectorAll("[data-cfg-tel-href]").forEach(function (el) {
      if (BIZ.phoneE164) el.setAttribute("href", "tel:" + BIZ.phoneE164);
    });
    document.querySelectorAll("[data-cfg-area]").forEach(function (el) {
      var a = BIZ.address || {};
      if (a.area) el.textContent = a.area + (a.zip ? " (" + a.zip + ")" : "");
    });
    document.querySelectorAll("[data-cfg-maps]").forEach(function (el) {
      if (BIZ.mapsQuery) el.setAttribute("href", "https://www.google.com/maps/search/" + BIZ.mapsQuery);
    });
    document.querySelectorAll("iframe[data-cfg-map]").forEach(function (el) {
      if (BIZ.mapsQuery) el.setAttribute("src", "https://www.google.com/maps?q=" + BIZ.mapsQuery + "&output=embed");
    });
    document.querySelectorAll("[data-cfg-ig]").forEach(function (el) {
      if (BIZ.instagram) {
        el.setAttribute("href", "https://instagram.com/" + BIZ.instagram);
        el.textContent = "@" + BIZ.instagram;
      } else {
        // sin Instagram real, mejor no mostrar un handle inventado
        var line = el.closest("p") || el;
        line.remove();
      }
    });
  }

  /* ---- Servicios desde config (con precio y duración) ---- */
  function renderServices() {
    var list = document.querySelector("[data-services]");
    var services = CFG.services;
    if (!list || !services || !services.length) return;

    var money = new Intl.NumberFormat((CFG.pos && CFG.pos.locale) || "es-AR", {
      style: "currency",
      currency: (CFG.pos && CFG.pos.currency) || "ARS",
      maximumFractionDigits: 0,
    });

    list.innerHTML = "";
    services.forEach(function (svc) {
      var li = document.createElement("li");
      li.className = "service-card reveal";
      var h3 = document.createElement("h3");
      h3.textContent = svc.name;
      var p = document.createElement("p");
      p.textContent = svc.desc || "";
      var meta = document.createElement("p");
      meta.className = "service-card__meta";
      meta.textContent = money.format(svc.price) + " · " + svc.duration + " min";
      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(meta);
      list.appendChild(li);
    });
  }

  /* ---- Horarios desde config (agrupa días consecutivos iguales) ---- */
  var DAY_NAMES = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  function hoursLabel(ranges) {
    if (!ranges || !ranges.length) return "Cerrado";
    return ranges.map(function (r) { return r[0] + " a " + r[1]; }).join(" y ");
  }

  function groupedHours() {
    var hours = CFG.hours || {};
    // Semana en orden lunes..domingo para lectura natural
    var order = [1, 2, 3, 4, 5, 6, 0];
    var groups = [];
    order.forEach(function (day) {
      var label = hoursLabel(hours[day]);
      var last = groups[groups.length - 1];
      if (last && last.label === label) last.days.push(day);
      else groups.push({ days: [day], label: label });
    });
    return groups;
  }

  function renderHours() {
    var dl = document.querySelector("[data-hours]");
    if (!dl || !CFG.hours) return;
    dl.innerHTML = "";
    groupedHours().forEach(function (g) {
      var div = document.createElement("div");
      var dt = document.createElement("dt");
      dt.textContent = g.days.length > 1
        ? DAY_NAMES[g.days[0]] + " a " + DAY_NAMES[g.days[g.days.length - 1]]
        : DAY_NAMES[g.days[0]];
      var dd = document.createElement("dd");
      dd.textContent = g.label;
      div.appendChild(dt);
      div.appendChild(dd);
      dl.appendChild(div);
    });
  }

  function renderHoursShort() {
    var el = document.querySelector("[data-cfg-hours-short]");
    if (!el || !CFG.hours) return;
    var parts = groupedHours().map(function (g) {
      var name = g.days.length > 1
        ? DAY_NAMES[g.days[0]].slice(0, 3) + " a " + DAY_NAMES[g.days[g.days.length - 1]].slice(0, 3)
        : DAY_NAMES[g.days[0]].slice(0, 3);
      return name + " " + (g.label === "Cerrado" ? "cerrado" : g.label.replace(/:00/g, "").replace(" a ", " a "));
    });
    el.textContent = parts.join(" · ");
  }

  /* ---- CTAs de reserva: si booking.enabled, van a turnos.html ---- */
  function wireBookingCtas() {
    if (!BOOKING_ON) return;
    document.querySelectorAll("[data-book]").forEach(function (el) {
      el.setAttribute("href", "turnos.html");
      el.removeAttribute("target");
      el.removeAttribute("rel");
      var label = el.getAttribute("data-book-label");
      if (label) el.textContent = label;
    });
    document.querySelectorAll("[data-book-alt]").forEach(function (el) {
      el.textContent = el.getAttribute("data-book-alt");
    });
  }

  /* ---- WhatsApp: arma los links desde config ---- */
  function wireWhatsApp() {
    var phone = BIZ.whatsapp;
    if (!phone) return;
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      if (BOOKING_ON && el.hasAttribute("data-book")) return; // ese CTA ya apunta a turnos.html
      var msg = el.getAttribute("data-msg") || BIZ.waDefaultMsg || "";
      el.setAttribute("href", "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  /* ---- Header: sombra al hacer scroll ---- */
  function wireHeader() {
    var header = document.querySelector("[data-header]");
    if (!header) return;
    var onScroll = function () {
      if (window.scrollY > 8) header.setAttribute("data-scrolled", "");
      else header.removeAttribute("data-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Menú mobile ---- */
  function wireMobileMenu() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-mobile-menu]");
    if (!toggle || !menu) return;

    var close = function () {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
      menu.hidden = true;
      document.body.style.overflow = "";
    };
    var open = function () {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Cerrar menú");
      menu.hidden = false;
    };

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      expanded ? close() : open();
    });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
    window.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* ---- Aparición al hacer scroll ---- */
  function wireReveal() {
    var items = document.querySelectorAll(".reveal");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---- Año del footer ---- */
  function wireYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    hydrateTexts();
    hydrateContacts();
    renderServices();
    renderHours();
    renderHoursShort();
    wireBookingCtas();
    wireWhatsApp();
    wireHeader();
    wireMobileMenu();
    wireReveal();
    wireYear();
  });
})();

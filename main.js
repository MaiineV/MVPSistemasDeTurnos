/* =========================================================
   Peluquería Pepe · interacciones
   Vanilla JS, sin dependencias.
   ========================================================= */

/* ⬇️⬇️⬇️  LO ÚNICO QUE HAY QUE EDITAR  ⬇️⬇️⬇️
   Número en formato internacional, sin "+", sin espacios ni guiones.
   El que está abajo es el TELÉFONO FIJO del local que figura en Google
   (011 4787-6724 → 541147876724). OJO: si la peluquería atiende WhatsApp
   por un CELULAR distinto, reemplazalo por ese (formato 54 9 11 + número). */
const WHATSAPP = {
  phone: "541147876724",
  defaultMessage: "Hola Pepe! Quería reservar un turno.",
};
/* ⬆️⬆️⬆️  ----------------------------------  ⬆️⬆️⬆️ */

(function () {
  "use strict";

  /* ---- WhatsApp: arma todos los links desde un solo lugar ---- */
  function wireWhatsApp() {
    const links = document.querySelectorAll("[data-wa]");
    links.forEach((el) => {
      const msg = el.getAttribute("data-msg") || WHATSAPP.defaultMessage;
      const url = `https://wa.me/${WHATSAPP.phone}?text=${encodeURIComponent(msg)}`;
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  /* ---- Header: sombra al hacer scroll ---- */
  function wireHeader() {
    const header = document.querySelector("[data-header]");
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 8) header.setAttribute("data-scrolled", "");
      else header.removeAttribute("data-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Menú mobile ---- */
  function wireMobileMenu() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (!toggle || !menu) return;

    const close = () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
      menu.hidden = true;
      document.body.style.overflow = "";
    };
    const open = () => {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Cerrar menú");
      menu.hidden = false;
    };

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      expanded ? close() : open();
    });
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ---- Aparición al hacer scroll ---- */
  function wireReveal() {
    const items = document.querySelectorAll(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---- Año del footer ---- */
  function wireYear() {
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    wireWhatsApp();
    wireHeader();
    wireMobileMenu();
    wireReveal();
    wireYear();
  });
})();

/* =========================================================
   biz.js · elige el negocio activo del demo multi-negocio
   ---------------------------------------------------------
   Prioridad: ?n=slug (gana y queda guardado) → último usado
   (localStorage) → Peluquería Pepe. Se carga DESPUÉS de los
   configs de negocios/ y ANTES de theme.js, en el <head>.
   El resto de la app sigue leyendo window.PELU_CONFIG.
   ========================================================= */
(function () {
  "use strict";

  var DEFAULT_SLUG = "peluqueria-pepe";
  var LS_KEY = "pelu:activeBiz";
  var REG = window.PELU_NEGOCIOS || {};

  var fromUrl = null;
  try {
    fromUrl = new URLSearchParams(window.location.search).get("n");
  } catch (e) { /* URL rara: seguimos con el guardado */ }

  var stored = null;
  try { stored = window.localStorage.getItem(LS_KEY); } catch (e) { /* sin storage */ }

  var slug =
    (fromUrl && REG[fromUrl] && fromUrl) ||
    (stored && REG[stored] && stored) ||
    DEFAULT_SLUG;

  try { window.localStorage.setItem(LS_KEY, slug); } catch (e) { /* sin storage */ }

  window.PELU_CONFIG = REG[slug] || REG[DEFAULT_SLUG] || {};
})();

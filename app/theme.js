/* =========================================================
   Tema desde config · se carga SINCRÓNICO en el <head>,
   después de config.js, para pintar la paleta antes del
   primer render (sin flash de colores default).
   ========================================================= */
(function () {
  "use strict";
  var cfg = window.PELU_CONFIG || {};
  var colors = (cfg.theme && cfg.theme.colors) || {};
  for (var key in colors) {
    if (Object.prototype.hasOwnProperty.call(colors, key)) {
      document.documentElement.style.setProperty("--" + key, colors[key]);
    }
  }

  /* Favicon con el emoji del negocio (evita el 404 de favicon.ico) */
  var emoji = cfg.business && cfg.business.faviconEmoji;
  if (emoji) {
    var link = document.createElement("link");
    link.rel = "icon";
    link.href = "data:image/svg+xml," + encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>" +
      "<text y='.9em' font-size='90'>" + emoji + "</text></svg>"
    );
    document.head.appendChild(link);
  }
})();

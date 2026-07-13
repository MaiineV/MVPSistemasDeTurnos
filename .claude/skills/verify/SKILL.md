---
name: verify
description: Cómo verificar este demo estático (landing + turnos + admin) end-to-end en un browser real.
---

# Verificar el demo

Sitio 100% estático, sin build. El "backend" es `app/store.js` (localStorage + seed).

## Levantar

```bash
cd PeluqueriaPepe && python -m http.server 8123   # simula GitHub Pages
# o directamente file:// (doble clic en index.html) — también debe funcionar
```

## Drive (Playwright, channel msedge — no requiere descargar browsers)

```js
const { chromium } = require("playwright");
const browser = await chromium.launch({ channel: "msedge", headless: true });
```

Flujos que importan:
1. **Landing:** `[data-services] .service-card` (6 desde config, con precio), header CTA → `turnos.html`, `--clay` en `documentElement` = config.
2. **Wizard:** card servicio → card staff → chip de día (`[data-day-strip] .chip:not([disabled])`) → `.slot` → form → `[data-step='done']`. Probar submit vacío (marca `data-invalid`) y que el slot reservado desaparezca al repetir el flujo.
3. **Admin:** `[data-login-demo]` → shell. Agenda: `[data-date-input]` + dispatchEvent("change"). Cobrar desde Caja → el total del día visible se actualiza (la venta se registra en la fecha del turno, no en "hoy").
4. **Re-brand:** backup `config.js`, cambiar name/colores/servicio, reload, assert, restaurar.

## Multi-negocio (15 configs en negocios/)

- Negocio activo: `?n=slug` → localStorage `pelu:activeBiz` → peluqueria-pepe. Switcher en `negocios.html` (15 cards).
- Para QA de las 15 landings usar `scratchpad/qa-final.js` como referencia: contexto con `reducedMotion: 'reduce'` (si no, las secciones `.reveal` salen vacías en el fullPage) y scrollear la página antes del screenshot (imágenes lazy).
- El chip "Hoy" puede no tener horarios por el leadTime de 60 min: probar los días siguientes antes de declarar "0 slots".
- `wide: true` en fotos de galería = ocupa 2 FILAS en desktop (énfasis vertical): usarlo solo con fotos verticales o cuadradas.

## Gotchas

- HOY puede ser lunes/domingo (cerrado): la agenda default salta al último día abierto; el chip "Hoy" queda deshabilitado. No es un bug.
- Cada contexto nuevo de Playwright = localStorage vacío = reseed automático (~430 bookings). El seed es determinístico por slug.
- La latencia fake es de 150-400ms: esperar ~900ms tras acciones antes de contar filas (la tabla muestra "Cargando…" primero).
- Los dos `date-nav` (Agenda y Caja) duplican `data-date-*`: scopear los selectores por panel o usar `.first()` visible.

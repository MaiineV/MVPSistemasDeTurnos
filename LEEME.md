# Peluquería Pepe (demo con sistema de turnos)

Demo de venta para Peluquería Pepe (Belgrano): landing + **sistema de turnos con
calendario, reservas y panel de gestión tipo punto de venta**. Sin backend real y
sin build: **doble clic en `index.html`** y funciona (también en GitHub Pages).

> Es un **mock de demostración**. El "backend" corre en el navegador (localStorage)
> con datos de ejemplo realistas que se regeneran solos. El pitch: *"Así se vería tu
> página con turnos online y panel de gestión. ¿La dejamos andando?"*

---

## Las 3 pantallas del demo

| Página | Qué muestra |
|---|---|
| `index.html` | La landing. Los botones "Reservar" llevan al sistema de turnos. |
| `turnos.html` | Reserva online: servicio → profesional → día y hora → datos → confirmación. |
| `admin.html` | Panel de gestión: **Agenda** por profesional, **Reservas**, **Clientes** (cuentas con historial) y **Caja** (cobros del día, totales por método de pago). Login demo: cualquier usuario/contraseña entra, o el link "entrar como demo". |

**Momento de venta:** abrí `turnos.html` y `admin.html` en dos pestañas, reservá un
turno como cliente y mostrá cómo aparece solo en la agenda del admin.

## Cómo re-brandear el demo para OTRO negocio

Todo vive en **`config.js`**: nombre, teléfono/WhatsApp, dirección, Instagram,
colores, servicios (con precio y duración), profesionales y horarios.

1. Copiá la carpeta completa con otro nombre (ej: `CosaDeMujeres/`).
2. Editá `config.js` (cambiá también el `slug`, que separa los datos guardados).
3. Listo: landing, wizard de turnos y panel quedan con la nueva identidad.
   Los textos largos (hero, "Nosotros", reseñas) se editan en `index.html`,
   igual que el `<title>` y los meta de Open Graph.

## Datos del demo

- Se generan solos la primera vez: ~30 clientes, 3 semanas de historia con ventas,
  y 2 semanas de agenda futura (siempre con lugar libre para reservar en un pitch).
- Si la demo tiene más de 3 días, se regenera sola para verse "viva".
- Botón **"Reiniciar demo"** en el panel admin para regenerar a mano.
- Todo queda en el navegador. No hay servidor, no se guarda nada en internet.

## Qué datos de Pepe ya son REALES (de Google)

- **Dirección:** Av. Congreso 2292, Belgrano, CABA (+ mapa apuntando ahí)
- **Teléfono:** 011 4787-6724 (botón "Llamar" funciona)
- **Rating:** 4,8★ · 402 reseñas · **Horarios:** Mar a Sáb 10 a 20
- **Reseñas:** dos reales (Nicolás Torok y Cristian Pieslinger)
- **Peluqueros:** Héctor y Pilo (hero, Nosotros, reseñas y sistema de turnos)

## Lo que falta para mostrarlo

1. **Fotos.** Pedile 5 o 6 del Instagram y reemplazá los `<figure class="frame ph ...">`
   de `index.html` por `<figure class="frame"><img src="assets/corte-1.jpg" alt="..." /></figure>`.
2. **WhatsApp.** `config.js` tiene el **fijo**. Si atienden WhatsApp por un celular,
   cambiá `business.whatsapp` (formato 54 9 11 + número).
3. **Servicios y precios.** El menú con precios es de ejemplo: confirmá con Héctor
   y Pilo qué hacen y a cuánto, y ajustá `services` en `config.js`.
4. **Instagram.** `@peluqueriapepe` es de ejemplo; poné el real en `config.js`.

## Estructura

```
PeluqueriaPepe/
├─ index.html      ← landing (contenido largo + estructura)
├─ turnos.html     ← wizard de reserva
├─ admin.html      ← panel de gestión (demo)
├─ config.js       ← ★ IDENTIDAD DEL NEGOCIO: editá esto para re-brandear
├─ styles.css      ← diseño de la landing (paleta vía tokens)
├─ main.js         ← hidrata la landing desde config + interacciones
├─ app/
│  ├─ theme.js     ← aplica los colores del config
│  ├─ store.js     ← "backend" del demo (datos, disponibilidad, caja)
│  ├─ booking.js   ← lógica del wizard
│  ├─ admin.js     ← lógica del panel
│  └─ app.css      ← estilos del wizard y el panel
├─ assets/         ← acá van las fotos reales
└─ LEEME.md        ← este archivo
```

## Para publicarlo

- **GitHub Pages:** subí el repo y activá Pages (branch `main`, root). Funciona
  porque es 100% estático con rutas relativas.
- **Netlify:** arrastrá la carpeta a [netlify.com/drop](https://app.netlify.com/drop).
- Después se le conecta un dominio propio.

## Notas de diseño

- Tipografías: **Fraunces** (títulos) + **Manrope** (texto), vía Google Fonts.
- Paleta cálida de salón editable en `config.js` → `theme.colors`.
- Responsive, accesible (foco visible, `aria-live`, `prefers-reduced-motion`), sin librerías.

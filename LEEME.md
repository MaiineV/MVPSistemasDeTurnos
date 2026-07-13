# Demo multi-negocio: sistema de turnos para la Lista A (Belgrano)

Demo de venta con **15 negocios reales de Belgrano**: landing + **sistema de
turnos con calendario, reservas y panel de gestión tipo punto de venta**, todo
re-brandeado por negocio (paleta, fotos reales, servicios, horarios y reseñas
de Google). Sin backend real y sin build: **doble clic en `index.html`** y
funciona (también en GitHub Pages).

> Es un **mock de demostración**. El "backend" corre en el navegador
> (localStorage) con datos de ejemplo realistas que se regeneran solos.
> El pitch: *"Así se vería TU página con turnos online y panel de gestión.
> ¿La dejamos andando?"*

**Live:** https://maiinev.github.io/MVPSistemasDeTurnos/

---

## El switcher: cambiar de negocio desde el celu

**`negocios.html`** es la página para Agustín (no está linkeada desde la
landing: guardala en favoritos del teléfono). Muestra las 15 tarjetas de la
Lista A en orden de llamada: un tap y el demo entero (landing, turnos y panel)
queda con la identidad de ese negocio en ese navegador.

- **Link directo por prospecto:** `index.html?n=<slug>` (botón "Copiar link"
  en cada tarjeta). Ideal para mandar por WhatsApp: el prospecto ve SU demo.
- El negocio elegido queda guardado (localStorage): navegar entre páginas lo
  mantiene. `?n=` siempre gana sobre lo guardado.
- Cada negocio guarda **sus propios datos de demo** (reservas, clientes, caja),
  no se pisan entre sí.
- Sin parámetro y sin negocio guardado, el demo abre como Peluquería Pepe.

## Las 3 pantallas del demo

| Página | Qué muestra |
|---|---|
| `index.html` | La landing del negocio activo. Los botones "Reservar" llevan al sistema de turnos. |
| `turnos.html` | Reserva online: servicio → profesional → día y hora → datos → confirmación. |
| `admin.html` | Panel de gestión: **Agenda**, **Reservas**, **Clientes** y **Caja**. Login demo: cualquier usuario/contraseña, o "entrar como demo". |

**Momento de venta:** abrí `turnos.html` y `admin.html` en dos pestañas,
reservá un turno como cliente y mostrá cómo aparece solo en la agenda.

## Cómo agregar o editar un negocio

Cada negocio es UN archivo en **`negocios/{slug}.js`** con TODO: identidad,
colores, textos de la landing (hero, nosotros, reseñas), fotos, servicios con
precios, staff y horarios.

1. Copiá `negocios/lolitas-nails.js` como plantilla y cambiale el `slug`,
   el `orden` (posición en el switcher) y el resto de los datos.
2. Poné sus fotos en `assets/{slug}/` (o dejá `photo: null` y `photos: []`:
   la landing oculta el hero visual y la galería sin romperse, ver ROMA).
3. Sumá el `<script src="negocios/{slug}.js">` en los `<head>` de
   `index.html`, `turnos.html`, `admin.html` y `negocios.html`.

Para bajar fotos y datos reales de Google: `production/outbound/place-photos.py`
y `place-details.py` del proyecto MVG (key por variable de entorno, nunca en git).

## Datos del demo

- Se generan solos por negocio la primera vez: ~30 clientes, 3 semanas de
  historia con ventas, y 2 semanas de agenda futura (siempre con lugar libre
  para reservar en un pitch).
- Si el demo tiene más de 3 días, se regenera solo para verse "vivo".
  Botón **"Reiniciar demo"** en el panel admin.
- Todo queda en el navegador. No hay servidor, no se guarda nada en internet.

## Qué es REAL y qué es de ejemplo

**Real (de la ficha de Google de cada negocio, jul 2026):** nombre, dirección,
teléfono, rating y cantidad de reseñas, horarios, reseñas citadas (textuales,
con autor), fotos, y los nombres del staff que aparecen en reseñas o carteles.

**De ejemplo (verificar con el dueño antes de publicar):** precios y duración
de los servicios, y el menú exacto de servicios. El WhatsApp es el teléfono de
la ficha: si atienden por otro número, cambiar `business.whatsapp`.

**Detalles por negocio (anotados en cada config):** Coco tiene 4+ sedes (pitch
multi-sucursal, el demo muestra Belgrano) · el IG de Byron que aparece en un
flyer es de otra marca, no publicar · el viernes "24 hs" de Pilates Line es un
error de su ficha (normalizado a 8-21) · ROMA da turnos SOLO por WhatsApp.

## Fotos: origen y créditos

Todas las fotos salen del **perfil público de Google Maps de cada negocio**
(bajadas con `place-photos.py`, curadas a mano: sin menores reconocibles, sin
pósters stock, sin fotos clínicas). Para el DEMO que se le muestra al dueño
está perfecto; **para publicar la versión final pedirle fotos propias o su OK**.

Autores (además del propio negocio, que subió la mayoría):

| Negocio | Autores de las fotos usadas |
|---|---|
| Peluquería Pepe | Marcelo Pompei, Nicolás Torok, German Romanowskij, Martin Rocha, Rodolfo B + el negocio |
| Coco Buenos Aires | el negocio + Anny Téllez, Florencia Abad, Giovanna Pechuan, Martina Abi |
| Cosa de Mujeres | CR, Florencia y Matias, raul cuevas |
| Byron Masoterapia | el negocio |
| Clínica Vet. RyB | el negocio + Hernán Judchak |
| Veterinaria Aurora | el negocio + Belen Doldan, Cecilia perez piza, Olgaantelo Antelo, Wonda Ramirez |
| Paorelia | el negocio |
| Lumina | el negocio |
| Peluquería Ezeangel | el negocio + María Eugenia Gallardo (Mauje) |
| Veterinaria JANPU | Carlos Miguel, Fabiana Dibb, Zoe Lucia Alonso Garcia, estela digiuliano |
| Lolita's Nails | el negocio |
| Lo de Nelly | el negocio + PANI |
| Pilates Line | el negocio |
| Odontología ROMA | el negocio |
| Daniel Fraga | el negocio |

## Limitaciones conocidas

- **OG por WhatsApp:** al compartir `index.html?n=slug`, la vista previa del
  link muestra los metadatos base (los bots no ejecutan JS). El título del tab
  sí cambia por negocio. Mejora futura: mini páginas puente con OG propio.
- El mapa embebido puede tardar en cargar la primera vez (es un iframe de Google).

## Estructura

```
PeluqueriaPepe/  (repo MVPSistemasDeTurnos)
├─ index.html      ← landing (estructura; el contenido viene del config activo)
├─ turnos.html     ← wizard de reserva
├─ admin.html      ← panel de gestión (demo)
├─ negocios.html   ← ★ SWITCHER: elegí qué negocio muestra el demo
├─ negocios/       ← ★ un config por negocio (identidad completa)
├─ styles.css      ← diseño de la landing (paleta vía tokens)
├─ main.js         ← hidrata la landing desde el config + interacciones
├─ app/
│  ├─ biz.js       ← resuelve el negocio activo (?n → guardado → Pepe)
│  ├─ theme.js     ← aplica colores y favicon del config
│  ├─ store.js     ← "backend" del demo (datos, disponibilidad, caja)
│  ├─ booking.js   ← lógica del wizard
│  ├─ admin.js     ← lógica del panel
│  └─ app.css      ← estilos del wizard y el panel
├─ assets/{slug}/  ← fotos reales curadas por negocio
└─ LEEME.md        ← este archivo
```

## Notas de diseño

- Tipografías: **Fraunces** (títulos) + **Manrope** (texto), vía Google Fonts.
- La paleta entera se define por negocio en `theme.colors` (12 tokens).
- Responsive, accesible (foco visible, `aria-live`, `prefers-reduced-motion`), sin librerías.

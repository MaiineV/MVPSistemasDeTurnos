# Peluquería Pepe (demo)

Landing estática para mostrarle a Peluquería Pepe (Belgrano) cómo se vería su página.
Sin backend, sin build: **doble clic en `index.html`** y abre en el navegador o en el celular.

> Es un **mock de demostración**. Los textos, fotos y datos son de ejemplo, listos para reemplazar
> por los reales. El pitch: *"Te armé esto en un rato, así quedaría tu página. ¿La dejamos andando?"*

---

## Qué datos ya son REALES (de Google)

Ya cargados en el demo:

- **Dirección:** Av. Congreso 2292, Belgrano, CABA (+ mapa apuntando ahí)
- **Teléfono:** 011 4787-6724 (botón "Llamar" funciona)
- **Rating:** 4,8★ · 402 reseñas
- **Horarios:** Mar a Sáb 10 a 20, Dom y Lun cerrado
- **Reseñas:** dos reales (Nicolás Torok y Cristian Pieslinger)
- **Nombres reales:** los dos peluqueros son **Héctor y Pilo** (usados en hero, Nosotros y reseñas)

## Lo que falta para mostrarlo

1. **Fotos.** Lo único importante que falta; en una peluquería es lo que más vende.
   Pedile 5 o 6 del Instagram (cortes, el local, Héctor y Pilo) y reemplazá los cuadros de color.
   Buscá en `index.html` los `<figure class="frame ph ...">` y cambialos por:
   ```html
   <figure class="frame"><img src="assets/corte-1.jpg" alt="Corte clásico de caballero" /></figure>
   ```
   Guardá las imágenes en la carpeta `assets/`.

2. **WhatsApp.** `main.js` tiene el **fijo** (011 4787-6724). Las reseñas dicen que el turno
   se pide **por teléfono**, así que quizá no tengan WhatsApp en esa línea. Si atienden WhatsApp
   por un **celular**, cambialo en el bloque `WHATSAPP` arriba de `main.js`. El botón "Llamar" ya anda igual.

3. **Servicios.** El menú es de ejemplo (peluquería clásica). Confirmá con Héctor y Pilo qué hacen
   realmente (¿cortan dama? ¿color?) y ajustá las 6 tarjetas.

4. **Instagram.** `@peluqueriapepe` es el handle de ejemplo; poné el real (Google no lo da; sacalo del perfil, si tienen).

---

## Estructura

```
PeluqueriaPepe/
├─ index.html      ← contenido y estructura
├─ styles.css      ← todo el diseño (paleta, tipografía, layout)
├─ main.js         ← WhatsApp + menú mobile + animaciones
├─ assets/         ← acá van las fotos reales
└─ LEEME.md        ← este archivo
```

## Notas de diseño

- Tipografías: **Fraunces** (títulos) + **Manrope** (texto), vía Google Fonts.
- Paleta cálida de salón (crema / espresso / terracota). Editá los colores en `:root` de `styles.css`.
- Responsive, accesible (foco visible, `prefers-reduced-motion`), sin librerías externas.

## Para publicarlo (cuando cierre)

Arrastrá la carpeta a [netlify.com/drop](https://app.netlify.com/drop) → queda online en segundos
con un link para compartir. Después se le conecta un dominio propio.

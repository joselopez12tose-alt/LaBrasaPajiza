# Guía de Aprendizaje: Desarrollo Web desde Cero

### Del "no sé nada" a "construí este sitio yo mismo y entiendo cada línea"

---

## Antes de empezar: léeme

Esta guía existe porque el sitio de **La Brasa Pajiza** quedó visualmente muy bien, pero tiene errores de funcionalidad que revelan un problema de fondo: el código funciona *por partes* pero no se entiende *como un todo*.

Ejemplos reales de este proyecto:

- El archivo `js/script.js` busca un elemento con `id="navbar"` que **no existe en el HTML**. El código está bien escrito, pero apunta a la nada.
- Falta la etiqueta `<nav>` de apertura, pero sí está el `</nav>` de cierre.
- La galería pide 5 imágenes (`parrilla2.jpg` a `parrilla6.jpg`) que **nunca se subieron al proyecto**.
- Existe un lightbox y un menú móvil en el HTML, pero **ningún JavaScript los activa**.

Ninguno de estos es un error difícil. Son errores de **no haber abierto el sitio en el navegador y probado**. Y eso es exactamente lo que esta guía te va a enseñar: no solo a escribir código, sino a **verificarlo, entenderlo y arreglarlo**.

### Sobre usar IA

No hay nada malo con usar IA. Es una herramienta y la vas a usar toda tu carrera. Pero hay una diferencia enorme entre:

- ❌ **Pedirle a la IA que haga el sitio** → obtienes código que no entiendes, no puedes arreglar y que falla en formas que no detectas.
- ✅ **Escribir tú el código y usar IA para explicarte lo que no entiendes** → aprendes el doble de rápido que sin ella.

**Regla mientras dure este proceso de aprendizaje:** puedes preguntarle a la IA *"¿por qué esto no funciona?"* o *"¿qué hace esta propiedad?"*, pero **no** *"escríbeme la sección de menú"*. La escribes tú, aunque tardes 5 veces más. Ese tiempo extra **es** el aprendizaje.

Al final de esta guía hay una sección específica sobre cómo usar IA de forma que te haga mejor y no dependiente.

---

## Cómo usar esta guía

- Está dividida en **8 módulos** (del 0 al 7).
- **No saltes módulos.** Cada uno asume el anterior.
- **Avanza por dominio, no por calendario.** Pasa al siguiente módulo cuando completes su checkpoint, no cuando "toque". Si un tema te cuesta, quédate ahí — no es retraso, es aprendizaje.
- Cada módulo tiene: **conceptos → recursos → ejercicios → checkpoint**.
- El **checkpoint** es una lista de preguntas. Si no las puedes responder sin buscar, repite el módulo. No es un examen, es un termómetro honesto contigo mismo.
- Al final vas a **reconstruir La Brasa Pajiza desde cero**, sin copiar y pegar del proyecto actual.

### Lo que necesitas instalado (hoy mismo)

| Herramienta | Para qué | Link |
|---|---|---|
| **Visual Studio Code** | Escribir código | https://code.visualstudio.com/ |
| **Google Chrome** | Navegador + DevTools | https://www.google.com/chrome/ |
| **Git** | Control de versiones | https://git-scm.com/downloads |
| **Cuenta de GitHub** | Guardar y publicar tu código | https://github.com/signup |

**Extensiones de VS Code recomendadas** (búscalas en el panel de extensiones, ícono de cuadritos):

- `Live Server` (de Ritwick Dey) — recarga el navegador automáticamente al guardar. **Indispensable.**
- `Prettier - Code formatter` — ordena tu código automáticamente.
- `Tailwind CSS IntelliSense` — autocompletado de clases de Tailwind (para el Módulo 4).
- `Spanish Language Pack` — VS Code en español, si lo prefieres.

---

# 📚 MÓDULO 0 — Cómo funciona la web

**No escribas código todavía.** Entender esto te va a ahorrar mucha confusión más adelante.

## Conceptos

1. **Qué pasa cuando escribes una URL.** Tu navegador (cliente) le pide archivos a una computadora (servidor). El servidor responde con HTML, CSS, JS e imágenes. El navegador los junta y dibuja la página.
2. **Cliente vs. Servidor.** Este proyecto es 100% del lado del cliente: son archivos que el navegador descarga y muestra. No hay base de datos ni backend.
3. **Los 3 lenguajes y su rol** (la analogía clásica):
   - **HTML** = el esqueleto y los órganos (estructura y contenido)
   - **CSS** = la piel y la ropa (presentación)
   - **JavaScript** = los músculos y el cerebro (comportamiento)
4. **Sitio estático vs. dinámico.** La Brasa Pajiza es **estático**: los precios están escritos directamente en el HTML. Para cambiar un precio hay que editar el archivo. Un sitio dinámico los leería de una base de datos.
5. **Qué es un dominio, qué es hosting, qué es el DNS.**

## Recursos

- 📖 **MDN — Cómo funciona la web** (en español, es *la* referencia oficial):
  https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
- 📖 **MDN — ¿Cómo funciona Internet?**
  https://developer.mozilla.org/es/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
- 📖 **MDN — La web y los estándares web**
  https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Web_standards
- 🎥 **Canal de ManzDev** — explicaciones muy claras y en español:
  https://www.youtube.com/@ManzDev → busca *"Cómo funciona internet"*
- 📖 **Roadmap oficial de Frontend** (el mapa completo de lo que existe; no te asustes, no necesitas todo):
  https://roadmap.sh/frontend

## Ejercicio

Abre **cualquier** sitio web (el de un restaurante, por ejemplo), presiona `F12` (o clic derecho → *Inspeccionar*) y:

1. En la pestaña **Elements**, busca el `<h1>` de la página.
2. Haz doble clic en el texto y cámbialo. Observa cómo cambia en vivo.
3. Recarga la página. Volvió al original. **Entiende por qué**: estabas editando la copia en tu navegador, no el archivo del servidor.
4. Ve a la pestaña **Network**, recarga, y mira todos los archivos que se descargan.

## ✅ Checkpoint Módulo 0

- [ ] Puedo explicar con mis palabras qué hace el navegador cuando abro una página.
- [ ] Sé la diferencia entre HTML, CSS y JavaScript.
- [ ] Sé abrir las DevTools y encontrar un elemento en la pestaña Elements.
- [ ] Entiendo por qué editar algo en DevTools no cambia el sitio real.

---

# 🧱 MÓDULO 1 — HTML: la estructura

## Conceptos

### 1.1 Anatomía básica
- Etiquetas, atributos, elementos anidados.
- **Etiquetas que se cierran** (`<p></p>`) vs. **que no** (`<img>`, `<br>`, `<input>`).
- La estructura mínima: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.
- `<head>`: `<title>`, `<meta charset>`, `<meta viewport>`, `<link>`, `<script>`.

> ⚠️ **Este es el error #1 del proyecto actual.** Cada etiqueta que abres **debe** cerrarse, y en el orden correcto. En `index.html` hay un `</nav>` sin su `<nav>`. Aprende a leer la **indentación** (el sangrado) para detectar esto.

### 1.2 Texto y contenido
- Títulos `<h1>` a `<h6>` — **solo un `<h1>` por página**, y en orden jerárquico. No los elijas por tamaño, elígelos por importancia.
- `<p>`, `<strong>`, `<em>`, `<br>`, `<hr>`, `<span>`.
- Listas: `<ul>`, `<ol>`, `<li>`.

### 1.3 Enlaces e imágenes
- `<a href="...">` — enlaces internos (`#seccion`), externos (`https://...`), a otros archivos (`pagina2.html`).
- `target="_blank"` y por qué debe ir con `rel="noopener noreferrer"`.
- `<img src="..." alt="...">` — **el `alt` no es opcional**: es accesibilidad (lectores de pantalla) y SEO.
- **Rutas relativas vs. absolutas** — `imagenes/logo.png` vs. `/imagenes/logo.png` vs. `https://...`

> ⚠️ **Este es el error #2 del proyecto actual.** El HTML pide `imagenes/parrilla2.jpg` pero ese archivo no existe. Aprende a verificar tus rutas: **si la imagen no aparece, abre la pestaña Network o Console en DevTools y verás un error 404.**

### 1.4 HTML semántico (¡importante!)
No todo es un `<div>`. Usa la etiqueta que **describe** el contenido:

`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`

Beneficios: Google lo entiende mejor (SEO), los lectores de pantalla lo navegan mejor (accesibilidad), y tu código es legible.

### 1.5 Formularios
`<form>`, `<label>`, `<input>` (y sus `type`: text, email, tel, number, checkbox, radio), `<textarea>`, `<select>`, `<button>`.
La relación `<label for="id">` ↔ `<input id="id">` y por qué importa.

### 1.6 Atributos globales
`id` (único en toda la página), `class` (reutilizable), `title`, `data-*`.

> ⚠️ **Este es el error #3 del proyecto actual.** El JavaScript busca `id="navbar"` y ese `id` no está en ningún lado. Entender la diferencia entre `id` y `class`, y cómo el JS los encuentra, evita este bug.

## Recursos

- 📖 **MDN — Estructurando la web con HTML** (currículo completo, en español, gratis):
  https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content
- 📖 **HTML Reference de MDN** (para consultar cualquier etiqueta):
  https://developer.mozilla.org/es/docs/Web/HTML/Element
- 📖 **freeCodeCamp en Español** — curso interactivo con ejercicios:
  https://www.freecodecamp.org/espanol/learn/2022/responsive-web-design/
- 📖 **W3Schools HTML** (inglés, pero es la referencia rápida más práctica que existe, con ejemplos ejecutables):
  https://www.w3schools.com/html/
- 🎥 **Canal de Fazt Code** → busca *"Curso de HTML desde cero"*:
  https://www.youtube.com/@FaztTech
- 🎥 **Canal de jonmircha** → tiene cursos completos y muy ordenados de HTML:
  https://www.youtube.com/@jonmircha
- 🎥 **Canal de Bluuweb** → busca *"Curso HTML y CSS"*:
  https://www.youtube.com/@bluuweb
- 📖 **MDN — Estructurar documentos con HTML semántico** (español):
  https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Structuring_documents
- 📖 **MDN — Sintaxis básica de HTML** (español):
  https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
- 📖 **MDN — Metadatos en el `<head>`** (español, para el `<title>`, `<meta>` y el favicon):
  https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata
- 📖 **MDN — Formularios HTML** (español):
  https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/HTML_forms

## Ejercicios

1. **Tu CV en HTML puro.** Sin nada de CSS. Feo, blanco y negro, Times New Roman. Con: título, foto, secciones semánticas, listas de experiencia, enlaces a tus redes.
2. **Menú de restaurante en HTML puro.** Lista de platos con nombre, descripción y precio. Solo estructura.
3. **Formulario de contacto** con nombre, email, teléfono, un `<select>` de "motivo" y un `<textarea>`. Con `<label>` correctos.
4. **Reto de detección de errores:** abre el `index.html` de La Brasa Pajiza, ve a la línea 23 y a la 78, y **arregla la etiqueta `<nav>` faltante**. Este es tu primer bug real.

**Valida tu HTML** con el validador oficial del W3C — te dice exactamente qué etiquetas están mal cerradas:
👉 https://validator.w3.org/nu/

## ✅ Checkpoint Módulo 1

- [ ] Escribo la estructura base de un HTML de memoria, sin copiar.
- [ ] Sé la diferencia entre `id` y `class` y cuándo usar cada uno.
- [ ] Uso etiquetas semánticas en lugar de `<div>` para todo.
- [ ] Sé por qué el `alt` de una imagen importa.
- [ ] Puedo detectar una etiqueta mal cerrada leyendo la indentación.
- [ ] Pasé mi HTML por el validador del W3C sin errores.

---

# 🎨 MÓDULO 2 — CSS: la presentación

Este es el módulo más denso y donde más gente se atora. Tómatelo con calma.

## Conceptos

### 2.1 Fundamentos
- Las 3 formas de aplicar CSS: inline, `<style>`, y archivo externo con `<link>`. **Usa siempre el externo.**
- Anatomía de una regla: `selector { propiedad: valor; }`
- Selectores: elemento (`p`), clase (`.tarjeta`), id (`#navbar`), descendiente (`nav a`), hijo directo (`ul > li`), agrupado (`h1, h2`).
- Pseudo-clases: `:hover`, `:focus`, `:active`, `:first-child`, `:nth-child()`.
- Pseudo-elementos: `::before`, `::after`.

### 2.2 La cascada, la herencia y la especificidad
**Este es EL concepto que separa a quien "pelea" con CSS de quien lo controla.**
- Por qué un estilo "no se aplica" (spoiler: casi siempre es especificidad).
- El cálculo de especificidad: inline > id > clase > elemento.
- Por qué `!important` es una trampa y casi nunca la solución.

### 2.3 El modelo de caja (Box Model)
`content` → `padding` → `border` → `margin`
- `width` / `height`
- **`box-sizing: border-box`** — qué hace y por qué prácticamente todos lo activan globalmente.
- Colapso de márgenes (margin collapse).

Visualízalo: en DevTools, pestaña **Elements**, panel derecho abajo, verás el diagrama de la caja del elemento seleccionado. Úsalo constantemente.

### 2.4 Display y posicionamiento
- `display`: `block`, `inline`, `inline-block`, `none`, `flex`, `grid`.
- `position`: `static`, `relative`, `absolute`, `fixed`, `sticky`. **Cuándo usar cada uno.**
- `z-index` y el contexto de apilamiento.

> 💡 En La Brasa Pajiza, los botones flotantes de WhatsApp usan `position: fixed` + `z-index`. El navbar que debería quedarse arriba al hacer scroll usaría `position: sticky`.

### 2.5 Flexbox (el más usado en el día a día)
- `display: flex`, `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`, `flex-grow/shrink/basis`.
- Eje principal vs. eje cruzado. **Entender esto es el 90% de Flexbox.**

### 2.6 CSS Grid (para layouts de página)
- `display: grid`, `grid-template-columns`, `grid-template-rows`, `gap`, `fr`, `repeat()`, `minmax()`, `auto-fit` / `auto-fill`.
- Cuándo Grid y cuándo Flexbox: **Grid para el layout de 2 dimensiones (la página), Flexbox para 1 dimensión (una fila de botones).**

### 2.7 Colores, tipografía y unidades
- Colores: nombres, `hex`, `rgb()`, `rgba()`, `hsl()`.
- Unidades: `px`, `%`, `rem`, `em`, `vh`, `vw`. **Cuándo usar `rem` vs `px`.**
- `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, `text-align`.
- Cómo importar fuentes de **Google Fonts**: https://fonts.google.com/

> ⚠️ **Otro error del proyecto actual:** el CSS declara `font-family: 'Poppins'` y el HTML tiene los `preconnect` a Google Fonts, pero **falta el `<link>` que realmente carga la fuente**. Aprende a verificar en DevTools → pestaña **Computed** qué fuente se está usando de verdad.

### 2.8 Diseño Responsive
- `<meta name="viewport">` — sin esto nada funciona en móvil.
- **Media queries**: `@media (min-width: 768px) { ... }`
- Filosofía **Mobile First**: diseña primero para móvil y luego agranda.
- Imágenes fluidas: `max-width: 100%`.

### 2.9 Transiciones y animaciones
- `transition` (propiedad, duración, timing-function, delay).
- `transform`: `scale()`, `translate()`, `rotate()`.
- `@keyframes` + `animation`.

> 💡 El archivo `css/estilos.css` del proyecto tiene una animación `fadeUp` con `@keyframes`. Léela — vas a entenderla completa después de este módulo.

### 2.10 Variables CSS
```css
:root {
  --color-primario: #facc15;
  --color-fondo: #090909;
}
.boton { background: var(--color-primario); }
```
Cambias el color en un solo lugar y se actualiza en todo el sitio.

## Recursos

- 📖 **MDN — Aprende CSS** (currículo oficial, en español):
  https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics
- 📖 **MDN — Referencia completa de CSS**:
  https://developer.mozilla.org/es/docs/Web/CSS/Reference
- 🎮 **Flexbox Froggy** — juego para aprender Flexbox (¡disponible en español!). **Hazlo completo, son 24 niveles.**
  https://flexboxfroggy.com/#es
- 🎮 **Grid Garden** — lo mismo pero para CSS Grid, también en español:
  https://cssgridgarden.com/#es
- 📖 **CSS-Tricks — Guía completa de Flexbox** (inglés, pero es *la* chuleta que todo dev tiene abierta):
  https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- 📖 **CSS-Tricks — Guía completa de Grid**:
  https://css-tricks.com/snippets/css/complete-guide-grid/
- 📖 **LenguajeCSS.com — Manual de CSS en español** (de ManzDev; excelente y muy completo):
  https://lenguajecss.com/
- 📖 **LenguajeCSS — Guía de propiedades CSS** (chuleta de consulta rápida):
  https://lenguajecss.com/css/introduccion/guia-css/
- 🎥 **Canal de ManzDev** → explicaciones profundas de CSS en español:
  https://www.youtube.com/@ManzDev
- 🎥 **Canal de Bluuweb** → busca *"Curso CSS"* y *"Flexbox"*:
  https://www.youtube.com/@bluuweb
- 🎥 **Canal de midudev** → contenido más avanzado, ideal cuando ya tengas base:
  https://www.youtube.com/@midudev
- 📖 **Especificidad CSS explicada** (MDN):
  https://developer.mozilla.org/es/docs/Web/CSS/CSS_cascade/Specificity
- 🎨 **Coolors** — generador de paletas de colores:
  https://coolors.co/
- 🎨 **Google Fonts**:
  https://fonts.google.com/

## Ejercicios

1. **Dale estilo a tu CV** del Módulo 1. Sin frameworks, CSS puro.
2. **Reproduce 3 tarjetas** como las de "¿Por qué elegirnos?" de La Brasa Pajiza: borde, fondo oscuro, emoji, título, texto, y un efecto `hover` que las levante. **Sin ver el código original.**
3. **Layout de 3 columnas** que en móvil se convierta en 1 columna, usando Grid + media query.
4. **Un navbar** con logo a la izquierda, links al centro y botón a la derecha, usando Flexbox.
5. **Reto:** haz que el navbar se quede pegado arriba al hacer scroll usando **solo CSS** (`position: sticky`). Esto resuelve, sin JavaScript, la mitad de lo que el `script.js` roto intentaba hacer.

**Practica con diseños reales:** https://www.frontendmentor.io/ — te dan el diseño y las imágenes, tú lo maquetas. Empieza por los "Newbie".

## ✅ Checkpoint Módulo 2

- [ ] Entiendo el box model y puedo depurarlo en DevTools.
- [ ] Puedo centrar un elemento vertical y horizontalmente sin buscar en Google.
- [ ] Sé cuándo usar Flexbox y cuándo Grid.
- [ ] Terminé Flexbox Froggy y Grid Garden completos.
- [ ] Puedo explicar por qué un estilo "no se aplica" (especificidad).
- [ ] Hice un layout que funciona en móvil y escritorio con media queries.
- [ ] Sé la diferencia entre `position: absolute`, `fixed` y `sticky`.

---

# ⚡ MÓDULO 3 — JavaScript: el comportamiento

Solo lo necesario para un sitio como este. Nada de frameworks.

## Conceptos

### 3.1 Fundamentos del lenguaje
- Variables: `let`, `const` (y por qué **nunca** `var`).
- Tipos: string, number, boolean, null, undefined, array, object.
- Operadores, template literals (`` `Hola ${nombre}` ``).
- Condicionales: `if / else`, operador ternario.
- Bucles: `for`, `for...of`, `while`.
- Funciones: declaración, expresión, **arrow functions** (`() => {}`).
- Arrays y sus métodos clave: `forEach`, `map`, `filter`, `find`.
- Objetos: propiedades, acceso con `.` y `[]`.
- `console.log()` — **tu mejor amigo para depurar.**

### 3.2 El DOM (aquí es donde vive tu sitio)
- Qué es el DOM: la representación en memoria del HTML que el navegador construye.
- **Seleccionar elementos:**
  - `document.getElementById('navbar')`
  - `document.querySelector('.tarjeta')` (el primero que coincida)
  - `document.querySelectorAll('.tarjeta')` (todos)
- **Modificar elementos:**
  - `.textContent`, `.innerHTML`
  - `.classList.add()`, `.remove()`, `.toggle()`, `.contains()`
  - `.setAttribute()`, `.getAttribute()`
  - `.style.propiedad`

> ⚠️ **El bug del proyecto actual, explicado.** `document.getElementById("navbar")` devuelve `null` porque ese `id` no existe. Cuando después el código hace `navbar.classList.add(...)`, JavaScript lanza el error *"Cannot read properties of null"*. **Regla de oro: si seleccionas un elemento y el resultado es `null`, el problema está en tu HTML, no en tu JS.**

### 3.3 Eventos
- `.addEventListener('click', funcion)`
- Eventos comunes: `click`, `scroll`, `submit`, `input`, `keydown`, `DOMContentLoaded`.
- El objeto `event` y `event.preventDefault()`.
- Por qué el `<script>` va al final del `<body>` (o con `defer`): **si el JS corre antes de que exista el HTML, no encuentra nada.**

### 3.4 Patrones prácticos que necesitas para este sitio
1. **Menú hamburguesa móvil** → `classList.toggle('hidden')` sobre el `#mobile-menu`.
2. **Navbar que cambia al hacer scroll** → `window.addEventListener('scroll', ...)` + `window.scrollY`.
3. **Lightbox de galería** → al hacer clic en una imagen, mostrar el overlay con esa imagen; al hacer clic en la ✕ o en el fondo, ocultarlo.
4. **Scroll suave** → ya lo resuelve `scroll-behavior: smooth` en CSS (¡no siempre necesitas JS!).
5. **Animaciones al hacer scroll** → `IntersectionObserver` (esto ya es nivel intermedio, déjalo para el final).

### 3.5 Depuración (debugging)
- La pestaña **Console** de DevTools: leer errores. **Un error rojo te dice el archivo y la línea. Léelo, no lo ignores.**
- `console.log()` estratégico para ver qué valor tiene una variable.
- Breakpoints en la pestaña **Sources**.

## Recursos

- 📖 **MDN — Primeros pasos con JavaScript** (español):
  https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting
- 📖 **JavaScript.info en español** — el mejor tutorial de JS que existe, gratis:
  https://es.javascript.info/
- 📖 **MDN — Introducción al DOM**:
  https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction
- 📖 **freeCodeCamp en Español — Algoritmos y estructuras de datos de JS**:
  https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/
- 🎥 **Canal de HolaMundo (Fernando Herrera)** → busca *"Curso de JavaScript"*:
  https://www.youtube.com/@HolaMundoDev
- 🎥 **Canal de midudev** → busca *"Curso JavaScript desde cero"*:
  https://www.youtube.com/@midudev
- 🎥 **Canal de jonmircha** → tiene un curso de JavaScript muy estructurado:
  https://www.youtube.com/@jonmircha
- 📖 **lenguajejs.com — Manual de JavaScript en español**:
  https://lenguajejs.com/javascript/
- 🎮 **JavaScript30** — 30 proyectos pequeños con JS puro, sin librerías (inglés, pero muy visual):
  https://javascript30.com/

## Ejercicios

1. **Contador**: dos botones (+ y −) y un número que sube y baja.
2. **Modo claro / oscuro**: un botón que hace `toggle` de una clase en el `<body>`.
3. **Menú hamburguesa funcional**: replica el `#menu-btn` / `#mobile-menu` de La Brasa Pajiza y **hazlo funcionar**.
4. **Lightbox**: una galería de 6 imágenes; al hacer clic en una, se abre grande sobre un fondo oscuro; se cierra con la ✕, con clic en el fondo, y con la tecla `Escape`.
5. **Validación de formulario**: que no se envíe si el email no tiene `@`.
6. **Reto final del módulo:** arregla los 3 bugs de JavaScript de La Brasa Pajiza (navbar, menú móvil, lightbox) **entendiendo por qué fallaban**.

## ✅ Checkpoint Módulo 3

- [ ] Puedo seleccionar un elemento del DOM y cambiar su texto y sus clases.
- [ ] Sé usar `addEventListener` y entiendo qué es una función callback.
- [ ] Sé leer un error de la consola e ir a la línea que lo causa.
- [ ] Entiendo por qué `getElementById` puede devolver `null` y cómo evitarlo.
- [ ] Hice funcionar un menú hamburguesa y un lightbox por mi cuenta.
- [ ] Sé cuándo un problema se resuelve con CSS y no necesita JavaScript.

---

# 🌊 MÓDULO 4 — Tailwind CSS

**⚠️ Importante: NO hagas este módulo antes de terminar el Módulo 2.** Tailwind es CSS con otro nombre. Si no entiendes `flex`, `padding` y `box model`, Tailwind te va a parecer magia incomprensible — y ese es exactamente el estado en el que está el proyecto actual.

## Conceptos

### 4.1 La filosofía "utility-first"
En vez de escribir:
```css
.tarjeta { background: #18181b; padding: 2rem; border-radius: 1.5rem; }
```
Escribes en el HTML:
```html
<div class="bg-zinc-900 p-8 rounded-3xl">
```
**Cada clase de Tailwind equivale a una o dos líneas de CSS.** Nada más. No hay magia.

### 4.2 Traducción mental (CSS ↔ Tailwind)
Haz esta tabla tuya. Es el 80% de lo que vas a usar:

| CSS | Tailwind |
|---|---|
| `display: flex` | `flex` |
| `flex-direction: column` | `flex-col` |
| `justify-content: center` | `justify-center` |
| `align-items: center` | `items-center` |
| `gap: 1rem` | `gap-4` |
| `padding: 1.5rem` | `p-6` |
| `margin-top: 2rem` | `mt-8` |
| `background: black` | `bg-black` |
| `color: white` | `text-white` |
| `font-size: 1.5rem` | `text-2xl` |
| `font-weight: 700` | `font-bold` |
| `border-radius: 0.75rem` | `rounded-xl` |
| `position: fixed` | `fixed` |
| `display: grid` | `grid` |
| `grid-template-columns: repeat(3, 1fr)` | `grid-cols-3` |

### 4.3 La escala de espaciado
`p-1` = 0.25rem, `p-2` = 0.5rem, `p-4` = 1rem, `p-8` = 2rem…
**La regla:** el número × 4 = píxeles. `p-6` = 24px.

### 4.4 Responsive con prefijos
```html
<div class="grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
```
1 columna en móvil, 2 en tablet, 4 en pantalla grande.
Breakpoints: `sm:` 640px, `md:` 768px, `lg:` 1024px, `xl:` 1280px, `2xl:` 1536px.
**Tailwind es mobile-first**: lo que escribes sin prefijo aplica a móvil.

### 4.5 Estados
`hover:`, `focus:`, `active:`, `group-hover:`, `disabled:`

Fíjate en este patrón real del proyecto:
```html
<div class="group ...">
  <img class="group-hover:scale-110">
</div>
```
Al pasar el mouse por el **contenedor** (`group`), la **imagen hija** reacciona.

### 4.6 Tailwind por CDN vs. compilado
El proyecto usa el CDN:
```html
<script src="https://cdn.tailwindcss.com"></script>
```
Esto está bien **para aprender y prototipar**, pero la propia documentación de Tailwind dice que **no es para producción**: descarga el framework completo cada vez, es pesado y muestra una advertencia en consola. Cuando el sitio vaya a ser real, hay que compilarlo con la CLI de Tailwind.

## Recursos

- 📖 **Documentación oficial de Tailwind** (inglés, pero es excelente y tiene buscador — **úsalo constantemente**):
  https://tailwindcss.com/docs
- 📖 **Instalación con la CLI de Tailwind** (para dejar el CDN cuando llegue el momento):
  https://tailwindcss.com/docs/installation/tailwind-cli
- 🎥 **Canal de midudev** → busca *"Tailwind CSS desde cero"*:
  https://www.youtube.com/@midudev
- 🎥 **Canal de Bluuweb** → busca *"Curso Tailwind CSS"*:
  https://www.youtube.com/@bluuweb
- 🎥 **Canal de Fazt Code** → busca *"Tailwind CSS tutorial"*:
  https://www.youtube.com/@FaztTech
- 🧩 **Tailwind Play** — editor online para experimentar sin instalar nada. **Ideal para practicar:**
  https://play.tailwindcss.com/
- 🎨 **Paleta de colores de Tailwind** (para saber qué es `zinc-900` o `yellow-400`):
  https://tailwindcss.com/docs/colors

## Ejercicios

1. **Toma el CV que estilizaste con CSS puro y reescríbelo con Tailwind.** Comparar las dos versiones es el ejercicio más valioso de este módulo.
2. En **Tailwind Play**, reproduce una tarjeta de producto del menú de La Brasa Pajiza desde cero.
3. Toma 10 clases de Tailwind del `index.html` del proyecto y **escribe al lado qué CSS generan**. Si no sabes alguna, búscala en la documentación.
4. Haz un grid responsive: 1 columna en móvil, 2 en tablet, 3 en escritorio.

## ✅ Checkpoint Módulo 4

- [ ] Puedo traducir una clase de Tailwind a su CSS equivalente.
- [ ] Entiendo la escala de espaciado (`p-4` = 16px).
- [ ] Sé usar los prefijos responsive y entiendo que Tailwind es mobile-first.
- [ ] Sé buscar en la documentación oficial cuando no conozco una clase.
- [ ] Entiendo por qué el CDN no sirve para producción.

---

# 🔀 MÓDULO 5 — Git y GitHub (trabájalo en paralelo)

**Empieza este módulo junto con el Módulo 1.** No lo dejes para el final. Cada ejercicio que hagas debe ir a un repositorio.

## Por qué importa

El proyecto actual tiene **un solo commit**: *"Primer commit del proyecto La Brasa Pajiza"*. Eso significa que:
- No hay historial: no se sabe qué se hizo, cuándo, ni por qué.
- No se puede volver atrás si algo se rompe.
- No se puede trabajar en equipo.

Un buen historial de commits es tu **red de seguridad** y tu **currículum**.

## Conceptos

### 5.1 Fundamentos
- Qué es un sistema de control de versiones y por qué existe.
- **Repositorio local** vs. **remoto** (GitHub).
- Las 3 zonas: **Working Directory** → **Staging Area** → **Repository**.

### 5.2 Comandos que usarás el 95% del tiempo
```bash
git init                      # iniciar un repo
git status                    # ¿qué cambió? (úsalo TODO el tiempo)
git add archivo.html          # preparar un archivo
git add .                     # preparar todos los cambios
git commit -m "mensaje"       # guardar una versión
git log --oneline             # ver el historial
git diff                      # ver qué cambió exactamente
```

### 5.3 Trabajar con GitHub
```bash
git remote add origin https://github.com/usuario/repo.git
git push -u origin main       # subir
git pull                      # bajar cambios
git clone https://...         # copiar un repo existente
```

### 5.4 Ramas (branches)
```bash
git branch                    # ver ramas
git switch -c nueva-funcion   # crear y cambiar a una rama
git switch main               # volver a main
git merge nueva-funcion       # fusionar
```
**Regla práctica:** `main` siempre debe funcionar. Cualquier cosa nueva o arriesgada, en una rama.

### 5.5 Buenos mensajes de commit
❌ `"cambios"`, `"arreglo"`, `"asdf"`, `"update"`
✅ `"Agrega sección de menú individual"`
✅ `"Corrige etiqueta nav faltante en el header"`
✅ `"Añade funcionalidad al menú móvil"`

Formato recomendado (**Conventional Commits**): `tipo: descripción`
- `feat:` nueva funcionalidad
- `fix:` corrección de error
- `style:` cambios visuales
- `docs:` documentación
- `refactor:` reorganizar código sin cambiar comportamiento

Ejemplo: `fix: agrega id navbar faltante que rompía el script de scroll`

### 5.6 El archivo `.gitignore`
Qué **no** subir: `node_modules/`, `.DS_Store`, archivos con contraseñas, `.env`.
Plantillas listas: https://github.com/github/gitignore

### 5.7 GitHub Pages (¡publica tu sitio gratis!)
En tu repo → **Settings** → **Pages** → Source: `main` → Save.
Tu sitio queda en línea en `https://tuusuario.github.io/nombre-repo/`.
**Esto es enorme:** puedes mandarle el link a un cliente sin pagar hosting.

### 5.8 Conceptos de colaboración (para más adelante)
- **Fork**, **Pull Request**, **Issues**, **code review**.
- Cómo resolver un conflicto de merge (te va a pasar, no entres en pánico).

## Recursos

- 📖 **Pro Git — el libro oficial, completo y gratis en español**:
  https://git-scm.com/book/es/v2
- 🎮 **Learn Git Branching** — visualizador interactivo, en español. **El mejor recurso para entender ramas.**
  https://learngitbranching.js.org/?locale=es_ES
- 📖 **Documentación oficial de GitHub en español**:
  https://docs.github.com/es
- 📖 **GitHub Skills** — cursos prácticos hechos por GitHub:
  https://skills.github.com/
- 🎥 **Canal de HolaMundo (Fernando Herrera)** → busca *"Curso de Git y GitHub"*:
  https://www.youtube.com/@HolaMundoDev
- 🎥 **Canal de Fazt Code** → busca *"Curso de Git y GitHub desde cero"*:
  https://www.youtube.com/@FaztTech
- 📖 **Conventional Commits** (en español):
  https://www.conventionalcommits.org/es/v1.0.0/
- 📖 **Guía de GitHub Pages**:
  https://docs.github.com/es/pages/getting-started-with-github-pages
- 🆘 **Oh Shit, Git!?!** — cómo salir de los enredos más comunes:
  https://ohshitgit.com/es

## Ejercicios

1. Crea un repo para tu CV y súbelo a GitHub.
2. Publícalo con **GitHub Pages** y comparte el link.
3. Haz al menos **10 commits** con mensajes descriptivos siguiendo Conventional Commits.
4. Crea una rama `fix/navbar`, arregla ahí el bug del `<nav>` de La Brasa Pajiza, y haz merge a `main`.
5. Completa los niveles de **"Introducción a Git"** en Learn Git Branching.

## ✅ Checkpoint Módulo 5

- [ ] Hago commits pequeños y descriptivos, no uno gigante al final.
- [ ] Sé crear una rama, trabajar en ella y fusionarla.
- [ ] Tengo al menos un proyecto publicado en GitHub Pages.
- [ ] Sé qué hacer si rompo algo (`git log`, volver a un commit anterior).
- [ ] Entiendo qué es y para qué sirve un `.gitignore`.

---

# 🏗️ MÓDULO 6 — El proyecto final: reconstruir La Brasa Pajiza

**La regla de oro: NO abras el `index.html` actual. NO copies ni pegues nada. NO le pidas el código a una IA.**

Vas a construir el sitio desde un archivo vacío. Puedes mirar el sitio *renderizado* en el navegador como referencia visual, igual que un diseñador mira una foto. Pero el código sale de tus manos.

## Plan de trabajo

Sigue las etapas **en este orden**. Cada una termina con un commit — no avances a la siguiente hasta cerrar la anterior.

### Etapa 1 — Estructura y estilos

**Paso 1 — Setup**
```bash
mkdir brasa-pajiza-v2
cd brasa-pajiza-v2
git init
```
Crea la estructura de carpetas:
```
brasa-pajiza-v2/
├── index.html
├── css/estilos.css
├── js/script.js
├── imagenes/
└── README.md
```
**Commit:** `chore: estructura inicial del proyecto`

**Paso 2 — HTML completo, sin nada de CSS**
Escribe **todo** el contenido con etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`. Va a verse horrible. **Está bien.** Si la estructura es correcta en blanco y negro, el diseño después es fácil.
**Commit:** `feat: estructura HTML semántica completa`

**Paso 3 — Valida y arregla**
Pasa tu HTML por https://validator.w3.org/nu/ hasta que salga limpio.
**Commit:** `fix: corrige errores de validación HTML`

**Paso 4 — Navbar y Hero**
**Commit por sección.**

**Paso 5 — Menú, tarjetas y galería**
Aquí practicas Grid y Flexbox de verdad.

### Etapa 2 — Interactividad y publicación

**Paso 6 — Responsive**
Prueba en DevTools con el modo dispositivo (`Ctrl+Shift+M`). Revisa en 375px, 768px y 1280px de ancho.

**Paso 7 — JavaScript**
- Menú hamburguesa
- Navbar con scroll (**o resuélvelo con `position: sticky` y ahórrate el JS**)
- Lightbox de galería
**Un commit por funcionalidad.**

**Paso 8 — Pulido y accesibilidad**
- Todos los `<img>` con `alt` descriptivo.
- Todos los `target="_blank"` con `rel="noopener noreferrer"`.
- Favicon enlazado.
- `<meta name="description">` para SEO.
- Verifica que **todas** las imágenes cargan (pestaña Network, sin 404).

**Paso 9 — Auditoría con Lighthouse**
En DevTools, pestaña **Lighthouse** → *Analyze page load*. Te da puntaje de Rendimiento, Accesibilidad, SEO y Buenas Prácticas.
**Meta: 90+ en Accesibilidad y SEO.**

**Paso 10 — README y publicación**
Escribe un `README.md` que explique qué es el proyecto, qué tecnologías usa y cómo verlo. Publícalo en GitHub Pages.

**Paso 11 — Autoevaluación**
Recorre la lista de verificación de abajo.

## ✅ Lista de verificación final del proyecto

**Funcionalidad**
- [ ] Todos los links del navbar llevan a su sección.
- [ ] El menú hamburguesa abre y cierra en móvil.
- [ ] El lightbox abre, cierra con ✕, con clic al fondo y con `Escape`.
- [ ] Todos los botones de WhatsApp abren con el mensaje correcto.
- [ ] **La consola del navegador no muestra ni un solo error rojo.**
- [ ] **Ninguna imagen está rota** (revisa la pestaña Network).

**Estructura**
- [ ] El HTML pasa el validador del W3C sin errores.
- [ ] Uso etiquetas semánticas, no `<div>` para todo.
- [ ] Todas las etiquetas están correctamente cerradas.

**Diseño**
- [ ] Se ve bien en 375px, 768px y 1280px.
- [ ] No hay scroll horizontal en móvil.
- [ ] Las fuentes cargan de verdad (verifícalo en DevTools → Computed).

**Accesibilidad y SEO**
- [ ] Todas las imágenes tienen `alt` descriptivo.
- [ ] Hay un solo `<h1>` y la jerarquía de títulos es correcta.
- [ ] Hay `<meta name="description">` y `<title>` descriptivo.
- [ ] Lighthouse: 90+ en Accesibilidad.

**Git**
- [ ] Mínimo 15 commits con mensajes descriptivos.
- [ ] El proyecto está publicado en GitHub Pages.
- [ ] Hay un `README.md` que explica el proyecto.

**Comprensión (lo más importante)**
- [ ] **Puedo explicar qué hace cada línea de mi código.**
- [ ] Si algo se rompe, sé por dónde empezar a buscar.
- [ ] No copié y pegué nada que no entienda.

---

# 🚀 MÓDULO 7 — Qué sigue después

Cuando termines lo anterior, ya eres capaz de construir sitios reales. Estos son los siguientes pasos naturales:

## Mejoras al mismo proyecto
1. **Compilar Tailwind** con la CLI en lugar del CDN.
2. **Optimizar imágenes**: convertirlas a `.webp` y usar `loading="lazy"`. Herramienta: https://squoosh.app/
3. **Animaciones al hacer scroll** con `IntersectionObserver`.
4. **Un formulario de contacto que funcione de verdad** con https://formspree.io/ (sin backend).
5. **Datos separados del HTML**: guarda el menú en un array de JavaScript y genera las tarjetas con `map()`. Así cambiar un precio es editar una línea, no buscar en 600 líneas de HTML.
6. **Dominio propio + Netlify o Vercel** en lugar de GitHub Pages.

## Conceptos siguientes (en orden)
1. **JavaScript moderno**: `fetch`, promesas, `async/await`, módulos ES6.
2. **Terminal y línea de comandos** — https://www.freecodecamp.org/espanol/news/comandos-de-linux/
3. **npm y Node.js** (para instalar herramientas).
4. **Un framework**: cuando de verdad lo necesites. **Astro** es excelente para sitios como este; **React** si quieres apps complejas.

> **Consejo honesto:** no corras a React. La gente que domina HTML, CSS y JS puro escribe mejor React que quien saltó directo al framework.

## Comunidades en español
- **midudev en Discord/Twitch** — la comunidad hispana más activa: https://www.twitch.tv/midudev
- **r/devsarg**, **r/programacion** en Reddit.
- **Frontend Mentor** para practicar con diseños reales: https://www.frontendmentor.io/
- **Codepen** para inspirarte y experimentar: https://codepen.io/

---

# 🤖 Cómo usar la IA sin dejar de aprender

Esta sección es la más importante de la guía.

## Reglas mientras aprendes

### ❌ NO hagas esto
- "Hazme una landing page de restaurante"
- "Escríbeme la sección de galería con Tailwind"
- Copiar y pegar código que no entiendes
- Aceptar una solución sin saber por qué funciona

### ✅ SÍ haz esto
- *"Escribí este código y no funciona. Este es el error de consola. ¿Qué significa?"*
- *"¿Puedes explicarme qué hace `position: sticky` con un ejemplo simple?"*
- *"¿Cuál es la diferencia entre `flex` y `grid` y cuándo usar cada uno?"*
- *"Aquí está mi código. ¿Qué le mejorarías y por qué?"* (después de que ya funcione)
- *"Hazme 5 preguntas sobre Flexbox para ver si realmente lo entendí"*
- *"Explícame este código línea por línea"*

## La prueba definitiva

**Si no puedes explicarle tu código a otra persona, no es tuyo.**

Antes de hacer commit de cualquier cosa, pregúntate: *¿podría explicar cada línea de esto en una entrevista?* Si la respuesta es no, vuelve atrás y entiéndelo.

## Un ejercicio recurrente

Toma una sección de código que escribiste y **explícasela en voz alta a alguien** (o grábate). Vas a descubrir rapidísimo qué entiendes de verdad y qué solo creías entender.

---

# 📎 Anexo A — Chuleta de recursos

## Documentación (guárdalos en favoritos)
| Recurso | Link |
|---|---|
| MDN Web Docs (español) | https://developer.mozilla.org/es/ |
| JavaScript.info (español) | https://es.javascript.info/ |
| LenguajeJS.com (español) | https://lenguajejs.com/ |
| LenguajeCSS.com (español) | https://lenguajecss.com/ |
| Tailwind CSS Docs | https://tailwindcss.com/docs |
| Pro Git (español) | https://git-scm.com/book/es/v2 |
| W3Schools | https://www.w3schools.com/ |
| Can I Use (compatibilidad) | https://caniuse.com/ |

## Cursos gratis en español
| Recurso | Link |
|---|---|
| freeCodeCamp Español | https://www.freecodecamp.org/espanol/learn/ |
| MDN Learn Web Development | https://developer.mozilla.org/es/docs/Learn_web_development |
| GitHub Skills | https://skills.github.com/ |

## Canales de YouTube en español
| Canal | Enfoque |
|---|---|
| midudev — https://www.youtube.com/@midudev | JS moderno, Tailwind, buenas prácticas |
| HolaMundo — https://www.youtube.com/@HolaMundoDev | Cursos completos, Git, JS |
| Fazt Code — https://www.youtube.com/@FaztTech | Tutoriales prácticos, proyectos |
| Bluuweb — https://www.youtube.com/@bluuweb | HTML, CSS, Tailwind desde cero |
| jonmircha — https://www.youtube.com/@jonmircha | Cursos muy estructurados |
| ManzDev — https://www.youtube.com/@ManzDev | Explicaciones profundas y claras de HTML/CSS/JS |

## Práctica interactiva
| Recurso | Link |
|---|---|
| Flexbox Froggy (español) | https://flexboxfroggy.com/#es |
| Grid Garden (español) | https://cssgridgarden.com/#es |
| Learn Git Branching (español) | https://learngitbranching.js.org/?locale=es_ES |
| Frontend Mentor | https://www.frontendmentor.io/ |
| Tailwind Play | https://play.tailwindcss.com/ |
| CodePen | https://codepen.io/ |

## Herramientas
| Recurso | Link |
|---|---|
| Validador HTML del W3C | https://validator.w3.org/nu/ |
| Google Fonts | https://fonts.google.com/ |
| Coolors (paletas) | https://coolors.co/ |
| Squoosh (optimizar imágenes) | https://squoosh.app/ |
| Unsplash / Pexels (fotos libres) | https://unsplash.com/ · https://www.pexels.com/ |
| Font Awesome (íconos) | https://fontawesome.com/icons |
| .gitignore templates | https://github.com/github/gitignore |

---

# 📎 Anexo B — Los bugs de La Brasa Pajiza como ejercicios

Estos son errores **reales** del proyecto actual, verificados en el navegador. Cada uno enseña algo. Úsalos como práctica guiada al terminar cada módulo.

| # | Bug | Archivo | Qué enseña | Módulo |
|---|---|---|---|---|
| 1 | Falta la etiqueta `<nav>` de apertura (hay `</nav>` sin pareja) | `index.html:23` y `:78` | Anidamiento y cierre de etiquetas | 1 |
| 2 | 5 imágenes de galería no existen (`parrilla2.jpg` … `parrilla6.jpg`) | `index.html:423-443` | Rutas de archivos, errores 404 | 1 |
| 3 | `getElementById("navbar")` devuelve `null` → el script falla | `js/script.js:3` | Relación DOM ↔ HTML, `id` vs `class` | 3 |
| 4 | El menú móvil (`#menu-btn` / `#mobile-menu`) no tiene JS | `index.html:57`, `:62` | Eventos, `classList.toggle` | 3 |
| 5 | El lightbox existe en HTML pero nada lo abre ni lo cierra | `index.html:593` | Eventos, mostrar/ocultar elementos | 3 |
| 6 | Falta el `<link>` de Google Fonts (hay `preconnect` pero no la hoja) | `index.html:12-13` | Cómo cargar fuentes externas | 2 |
| 7 | 4 imágenes se cargan de Unsplash en vez de fotos propias | `index.html:199, 226, 254, 408` | Recursos locales vs. externos | 1 |
| 8 | Tailwind por CDN (no apto para producción) | `index.html:9` | Desarrollo vs. producción | 4 |
| 9 | Falta el `<link rel="icon">` del favicon (el archivo sí existe) | `index.html` `<head>` | Metadatos del `<head>` | 1 |
| 10 | Varias imágenes de galería sin atributo `alt` | `index.html:423-443` | Accesibilidad | 1 |
| 11 | `target="_blank"` sin `rel="noopener noreferrer"` | Todos los links de WhatsApp | Seguridad básica en enlaces | 1 |
| 12 | Espaciados inconsistentes entre tarjetas (`mt-4`, `mt-10`, `p-4`, `p-8`) | Sección de menú | Consistencia y sistema de diseño | 4 |

**Sugerencia de método:** arregla **un bug por rama de Git**, con un commit descriptivo cada uno. Es práctica de código y de Git al mismo tiempo.

---

# 📋 Anexo C — Orden de avance y entregables

Esta es la secuencia recomendada. **Avanza cuando el entregable esté terminado**, no antes.

| Orden | Foco | Entregable que demuestra que lo dominas |
|---|---|---|
| 1 | Módulo 0 | Puedes explicar cliente/servidor y navegar las DevTools |
| 2 | Módulo 1 (HTML) + Módulo 5 (Git básico) | CV en HTML puro subido a GitHub con commits descriptivos |
| 3 | Módulo 2 (box model, Flexbox) | Flexbox Froggy completo + CV estilizado con CSS puro |
| 4 | Módulo 2 (Grid, responsive) | Grid Garden completo + un layout responsive propio |
| 5 | Módulo 2 (animaciones, variables) | Un reto de Frontend Mentor terminado |
| 6 | Módulo 3 (fundamentos + DOM) | Contador, modo claro/oscuro y menú hamburguesa funcionando |
| 7 | Módulo 3 (eventos + debugging) | Lightbox funcional + bugs 3, 4 y 5 del Anexo B arreglados |
| 8 | Módulo 4 (Tailwind) + Módulo 5 (ramas) | El mismo CV reescrito en Tailwind |
| 9 | Módulo 6 — Etapa 1 | HTML validado + CSS completo del sitio |
| 10 | Módulo 6 — Etapa 2 | Sitio funcional, sin errores en consola, publicado en GitHub Pages |

---

## Palabras finales

El sitio actual **se ve bien**. Ese es un mérito real y no hay que restarle valor. El problema no es el diseño, es que el código no está bajo control: hay piezas que apuntan a la nada y funcionalidades que nunca se probaron.

La diferencia entre un sitio que "se ve bien" y un sitio **profesional** son exactamente estas cosas: que no haya errores en consola, que todas las imágenes carguen, que funcione en un teléfono, que sea accesible, y que **quien lo escribió pueda mantenerlo**.

Todo eso se aprende. Y se aprende escribiendo código, rompiéndolo y arreglándolo — no pidiéndoselo a nadie, ni a una persona ni a una máquina.

**Nadie aprende a programar leyendo. Se aprende escribiendo código roto y arreglándolo.**

Suerte. 🔥

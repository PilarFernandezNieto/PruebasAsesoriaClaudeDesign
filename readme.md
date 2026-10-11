# Web corporativa JUMCO
Cuatro páginas estáticas en HTML + Bootstrap 5.3 + CSS propio, sin React ni JavaScript propio. JUMCO es la marca principal; `[NOMBRE DEL PRODUCTO]` aparece como parte secundaria de su actividad. Cada banda es una `<section class="banda_*">` independiente, trasladable a un parcial de Twig; cabecera y pie son idénticos en las cuatro páginas.

## Páginas
- `index.html`: portada. Hero con fondo a todo el ancho y la ola del logotipo, actividad, ámbitos de trabajo con iconos, enfoque (banda azul con diagonales), producto (franja celeste compacta), tres últimas noticias y destinos.
- `index-ambitos-numerados.html`: variante de la portada con los ámbitos como lista numerada.
- `sobre-nosotros.html`: quiénes somos, ámbitos en tipografía grande, cómo abordamos cada necesidad, relación JUMCO–producto (`#producto`).
- `noticias.html`: filtros por categoría (estáticos), las 7 noticias con la misma caja que la portada y paginación. Sin fichas individuales.
- `contacto.html`: panel azul con datos provisionales y formulario con etiquetas visibles.

## CSS (`css/`)
- `layout_general.css`: base, cabecera, pie, botones, forma_lobulo, cierre.
- `banda_noticias.css`: caja de noticia compartida.
- `index.css`: bandas de la portada (incluye estilos de la variante numerada).
- `interior.css`: páginas interiores.
Tokens desde `../../styles.css`. Clases propias con guiones bajos (`hero_contenido`, `banda_noticias`…).

## Notas
Imágenes: marcadores de posición (`imagen_placeholder`). Iconos: Font Awesome 6. Textos provisionales.

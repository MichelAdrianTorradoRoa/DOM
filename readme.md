# Qué es el DOM

El Document Object Model (DOM) es una interfaz de programación que representa los documentos HTML como una estructura jerárquica de objetos. Es decir, convierte el código HTML estático en una representación dinámica que puede ser manipulada mediante JavaScript.

## Relación con la estructura de una página web

Imagina una página web como un árbol. El elemento HTML es la raíz, y cada etiqueta (como `<div>`, `<p>`, `<span>`, etc.) es una rama o nodo de ese árbol. El DOM nos permite acceder a cada uno de estos nodos y modificar sus propiedades, como el contenido, el estilo o los atributos.

### Ejemplo de HTML

```html
<div id="miDiv">
  <p class="parrafo">Este es un párrafo</p>
</div>

// Ejemplo de getElementById
const parrafo = document.getElementById("miParrafo");
parrafo.textContent = "Nuevo contenido del párrafo.";

// Ejemplo de getElementsByClassName
const elementosRojos = document.getElementsByClassName("rojo");
for (let i = 0; i < elementosRojos.length; i++) {
  elementosRojos[i].style.backgroundColor = "blue";
}

// Ejemplo de getElementsByTagName
const elementosLi = document.getElementsByTagName("li");
for (let i = 0; i < elementosLi.length; i++) {
  elementosLi[i].textContent += " " + (i + 1);
}

// Ejemplo de querySelector
const input = document.querySelector("input[type='text']");
input.placeholder = "Nuevo placeholder";

// Ejemplo de querySelectorAll
const parrafos = document.querySelectorAll("p");
parrafos.forEach(parrafo => {
  parrafo.classList.add("destacado");
});

const $divContainer = document.getElementById("info");
// muestro en consolo el contenido del div
console.log($divContainer.textContent);

// 2.query selector
const $parafo = document.querySelector(".detalle");
// cambio el texto de ese elemento
$parafo.textContent = "Este en un detalle modificiado";


// selecciono todos los p
const $parrafos = document.querySelectorAll("p");
console.log($parrafos);

// cambio fondo =>querySelectorAll retorna un nodeList hay que iterar
$parrafos.forEach((paragraph)=>{
        paragraph.style.backgroundColor = "cyan"
        paragraph.style.borderRadius = "10px"
})
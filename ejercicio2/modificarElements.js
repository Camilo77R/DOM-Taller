const $container = document.querySelector("#container");

const colors = ["red","orange","yellow" ,"grey"];
// modifico estilo

const $btnEstilo = document.querySelector("#btn-estilo");
$btnEstilo.addEventListener("click",()=>{
        // numero entre la llogitud de del arreglo
        let nAleatorio = Math.floor(Math.random()* colors.length);
        console.log(nAleatorio);
        console.log("Se cambio el color");
        $container.style.backgroundColor = colors[nAleatorio];
   
});

// modifco el texto
const $title = document.querySelector("#title");
$title.textContent = "Carta de Juego" //ANTES ERA CARTA DE FUTBOL


// cambiar atributo class
const $liElement = document.querySelector("#movimientosLi");
console.log($liElement ,$liElement.id);//Antes

$liElement.id = "carta-de-juego"
console.log($liElement,$liElement.id);//despues
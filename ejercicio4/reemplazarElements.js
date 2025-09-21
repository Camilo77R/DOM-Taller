const $container = document.querySelector("#contenedor");
const $div = document.querySelector("div");

const nuevoDiv = document.createElement("div");
// texto del div 
nuevoDiv.textContent = "Soy un nuevo div";
// le agrego estilo 
let estiloDiv = "bg-orange-300 p-3 max-w-xs text-center font-semibold text-2xl m-auto mt-24 rounded-tr-2xl rounded-bl-2xl";
// le agrego los estilos y clase al  elemento 
nuevoDiv.className = estiloDiv;
// lo reemplazo desde el padre 
$container.replaceChild(nuevoDiv,$div); //primero el nuevo nodo(element), luego el que replazaré


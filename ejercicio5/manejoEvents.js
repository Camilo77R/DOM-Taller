const $btnClick = document.querySelector("#btnClick");
const $btnRemove = document.querySelector("#btnRemove");


function darClick(){
    alert("Botón Clickeado!!!!");

}
$btnClick.addEventListener("click", darClick);


$btnRemove.addEventListener("click",()=>{
    $btnClick.removeEventListener("click", darClick)
});


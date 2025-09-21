const $containerUl =document.querySelector("#list-container");

const $btnAdd = document.querySelector("#btn-add");
const $btnDelete = document.querySelector("#btn-delete");





$btnDelete.addEventListener("click",()=>{
    console.log("SE dio click");
    const $elementLi = $containerUl.querySelector("li");
   
    if($elementLi){//si existe => true pues elimino
        $elementLi.remove();
    }//sino es null
    
});

$btnAdd.addEventListener("click",()=>{

    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = "Nuevo Li"
    const estilosLi = "bg-white p-2 rounded-md mb-4";
    nuevoLi.className = estilosLi;

    $containerUl.append(nuevoLi);
});
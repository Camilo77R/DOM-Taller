const $containerAllTasks = document.querySelector("#container-tasks");
const $inputTxt = document.querySelector("#input-txt");
const $btnAdd = document.querySelector("#btnAdd");



function createElementsTask(){
    let containerTask = document.createElement("article");//hago un article en lugar del div este contiene todo la tarea
    
    let styleContainer = " flex justify-between items-center bg-yellow-50 py-2 px-4 rounded-md mb-3"
    containerTask.className = styleContainer;

    let taskP = document.createElement("p");
    if($inputTxt.value !== ""){
        taskP.textContent = $inputTxt.value;   // le pongo lo ue hay e el input
    }else{
        taskP.textContent = "tarea vacia :(";
    }
    
    
    // creo un div para lo s 2 btn y el estilo
    let divContainerBtn = document.createElement("div");
    let styleDiv = "flex gap-3";
    divContainerBtn.className = styleDiv;
    
    let btnStateTask = document.createElement("button");
    btnStateTask.className = "btnStateTask";

    let iconStateTask =document.createElement("i");
    let styleIcon = " fa-solid fa-circle text-orange-600";
    iconStateTask.className = styleIcon;
    
    let btnDeleteTask = document.createElement("button");
    btnDeleteTask.textContent = "Delete";
    btnDeleteTask.className = "btnDelete  bg-red-500 py-2 px-3 rounded-md text-white";

    return{
        containerTask,
        taskP,
        divContainerBtn,
        btnStateTask,
        iconStateTask,
        btnDeleteTask
    };
    
}


function estructurarElements(elementos){
    // esta fn es para hacer la estructura del html
    // desde lo as interno a lo externo de lo especifico a lo general
    elementos.btnStateTask.append(elementos.iconStateTask);
    elementos.divContainerBtn.append(elementos.btnStateTask, elementos.btnDeleteTask);
    elementos.containerTask.append(elementos.taskP,elementos.divContainerBtn);


    
    return elementos.containerTask;//retorno la estructura dela tarea 
}
function createTask(){
    const elementos = createElementsTask();
    const taskCompleta = estructurarElements(elementos);

    $containerAllTasks.append(taskCompleta);


}

$btnAdd.addEventListener("click",(e)=>{
    e.preventDefault();
    createTask();
});




function deleteTask(e) {
    if (e.target.classList.contains("btnDelete")) {
        Swal.fire({
        title: '¿Estás seguro de borrar esta tarea?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonText: 'No, cancelar'
        }).then((result) => {
        
        if (result.isConfirmed) {
            // closest es para ver si el padre de donde hice clik es article lo borro
            e.target.closest("article").remove();
        }
        });
    }
}

// delegacion de eventos como no tengo el btn de borrar uso a su padre par que esscuche los clicks de sus eleentos no importa si se crean antes o despues
$containerAllTasks.addEventListener("click", deleteTask);


function toggleComplete(e) {
    e.preventDefault(); //evito que ahga un submit y se pierda las tareas
    // Buscar el botón, ya sea que clickees en él o en su hijo (icono) el va hacia arriba de donde d click buscando la clse del btn 
    const boton = e.target.closest(".btnStateTask");
    
    if (boton) {
        const iconoTask = boton.querySelector("i");
        
        if (iconoTask) {
        iconoTask.classList.toggle("text-orange-600");
        iconoTask.classList.toggle("text-green-500");
        }
    }
}
$containerAllTasks.addEventListener("click", toggleComplete);

























// function deleteTask(e){
//     const quiereBorrar = confirm('¿Estás seguro de que quieres borrar este elemento?');
//     if(quiereBorrar){

//         if(e.target.id === "btnDelete"){
//             e.target.closest("article").remove();
//         }
//     }else{
//         console.log("No se borra la tarea");
//     }
// }

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
    // btnStateTask.className = "isCompleted";

    let iconStateTask =document.createElement("i");
    let styleIcon = " fa-solid fa-circle text-orange-600";
    iconStateTask.className = styleIcon;
    
    let btnDeleteTask = document.createElement("button");
    btnDeleteTask.id = "btnDelete";
    btnDeleteTask.textContent = "Delete";
    btnDeleteTask.className = "bg-red-500 py-2 px-3 rounded-md text-white";

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
    // const p = document.createElement("p");
    // p.textContent = "PPPPPPP"
    // $containerAllTasks.append(p);
});



function deleteTask(e){
    if(e.target.id === "btnDelete"){
        e.target.closest("article").remove();
    }
}

// delegacion de eventos como no tengo el btn debrro uso a su padre par que esscuche los clicks de sus eleentos no importa si se crean antes o despues


function toggleComplete(elementos){
    elementos.btnStateTask.classList.toggle("isCompleted");
    elementos.btnDeleteTask.style.color = "green";
}

$containerAllTasks,addEventListener("click", toggleComplete);
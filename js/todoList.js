const toDoForm = document.querySelector("div.bottom-row #todo-form");
const toDoInput = document.querySelector("div.bottom-row #todo-form input");
const toDoList = document.querySelector("div.bottom-row #todo-list");

let toDos = [];

const TODOS_KEY = "toDos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array 또는 object를 문자열로 변환해서 저장


}

function deleteToDo(event){
    const listItem =event.target.parentElement;
    //console.log(listItem.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(listItem.id));
    listItem.remove();
    saveToDos();
}

function paintToDo(saveTodo){
    const listItem = document.createElement("li");
    listItem.id = saveTodo.id;
    const span = document.createElement("span");
    span.innerHTML = saveTodo.text;
    const button = document.createElement("button");
    button.innerHTML = "❌";
    button.addEventListener("click",deleteToDo);
    listItem.appendChild(span);
    listItem.appendChild(button);
    toDoList.appendChild(listItem);
}


function handleToDoSubmit(event){
    event.preventDefault(); 
    const saveTodo = toDoInput.value;
    toDoInput.value = "";
    const saveTodoObject = {
        text: saveTodo,
        id: Date.now(),
    };
    //console.log(saveTodo);
    //console.log(saveTodoObject);
    toDos.push(saveTodoObject);
    saveToDos();
    paintToDo(saveTodoObject);
}


toDoForm.addEventListener("submit",handleToDoSubmit);




const saveToDoList = localStorage.getItem(TODOS_KEY);
//console.log(saveToDoList);
if(saveToDoList !== null){
    const parsedToDos = JSON.parse(saveToDoList);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // parsedToDos.forEach((item) => console.log("item : ",item ))
}

function needFilter(item){
    return item !== 3;
}

/*
[1,2,3,4].filter(needFilter) =
needFilter(1) = 1 (true)
needFilter(2) = 2 (true)
needFilter(3) x   (false) false를 리턴받으면 새 배열에는 3이 안들어간다.
needFilter(4) = 4 (true)
새 배열에 필터를 통해 값을 넣을 때 위처럼 4번의 needFilter를 부른다.
*/





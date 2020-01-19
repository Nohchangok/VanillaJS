const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//할일을 저장하는 List를 만듬.
const toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
}

function saveToDos(){
    //localStorage의 value는 string으로 저장됨.
    //JSON.stringify()는 자바스크립트 object를 string으로 바꿔줌.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;
    delBtn.innerHTML = "x";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn); //li에 delBtn 버튼추가.
    li.appendChild(span); //li에 <span>추가.
    li.id = newId;
    todoList.appendChild(li); // ul에 li추가.
    
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //초기화
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //localStorage에서 string으로 바꿔준 걸 다시 object로 변환.
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
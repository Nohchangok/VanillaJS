//사용할 모든 태그나 클래스를 속성에 담음.
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

//user local storage 유저 저장소 생성.
const USER_LS = "currentUser",
SHOWING_CN ="showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();     //form에 enter를 누르면 사라지게 되는 기본동작을 막는 메소드.
    const currentValue = input.value;   //input의 value값을 얻어 paintGreetiong의 메소드 실행.
    paintGreeting(currentValue);
    saveName(currentValue);

}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

//form에 이름을 입력시 실행되는 메소드
function paintGreeting(text){
    //만약 텍스트를 색칠할 거라면 폼을 숨겨줘야한다.
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `hi~ ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //she is not 
        askForName();

    }else{
        paintGreeting(currentUser);
        //she is

    }
}

//laodName메소드 실행.
function init(){
    loadName();
}


init();
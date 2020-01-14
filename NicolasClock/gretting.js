//사용할 모든 태그나 클래스를 속성에 담음.
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

//user local storage 유저 저장소 생성.
const USER_LS = "changok",
SHOWING_CN ="showing";

function askForName(){
    form.classList.add(SHOWING_CN);
}

function paintGreeting(text){
    //만약 텍스트를 색칠할 거라면 폼을 숨겨줘야한다.
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `hi~`+USER_LS;
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
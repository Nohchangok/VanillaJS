//사용할 모든 태그나 클래스를 속성에 담음.
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

//user local storage 유저 저장소 생성.
const USER_LS = "changok",
SHOWING_CN ="showing";

//
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `hi~ ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //she is not 

    }else{
        paintGreeting(currentUser);
        //she is

    }
}

function init(){
    loadName();
}


init();
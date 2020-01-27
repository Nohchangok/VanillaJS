const weather = document.querySelector(".js-weather");

const API_KEY = "9a94b0b320b5d82ce1642141fd260dc7";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(Rsjson){
        console.log(Rsjson)
        const temperature = Rsjson.main.temp;
        const place = Rsjson.name;
        weather.innerText =`${temperature} @ ${place}`;
    }) //then()은 데이터가 완전히 넘어온다음 호출한다.
}

//위도와 경도를 localStorage에 저장한다.  
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//위도와 경도를 읽어온다.
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,    // latitude : latitude,
        longitude    //longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

function handleGeoError(){
    console.log("Cant access geo location");
}

//내위치를 읽겠다
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
         getWeather(parseCoords.latitude, parseCoords.longitude); 
    }
}

function init(){
    loadCoords();
}

init();

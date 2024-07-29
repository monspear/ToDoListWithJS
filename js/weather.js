const APIKEYS = "";

function onGeoSuccess(position){
    const lat = position.coords.latitude; // 사용자 위치 위도
    const lon = position.coords.longitude; // 사용자 위치 경도
    //console.log("You live in ",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEYS}&units=metric`;
    if(APIKEYS.length == 0){
        onGeoFail();
    }else{
        fetch(url)
        .then(response => {
            // reponse가 ok가 아닐 때
            if (!response.ok){
            throw new Error('api 오류 발생')
         }
        return response.json()
        })
        .then(data => {
            const weather = document.querySelector("div.region-top-bar #weather span:first-child");
            const city = document.querySelector("div.region-top-bar #weather span:last-child");
            weather.innerHTML = `날씨 : ${data.weather[0].main} / 온도 : ${data.main.temp} / 습도 : ${data.main.humidity}%`;
            city.innerHTML = data.name;
        }); // 자바스크립트가 이 url을 부름 
    }
}
function onGeoFail(){
    const weather = document.querySelector("div.region-top-bar #weather span:first-child");
    const city = document.querySelector("div.region-top-bar #weather span:last-child");
    weather.innerHTML = "날씨와 위치를 찾지 못했습니다.";
    city.innerHTML = "(api 키 값을 확인해 주세요)";
    //alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoFail);




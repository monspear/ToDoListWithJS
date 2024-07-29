const clock = document.querySelector("div.main-view #clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // Ctrl + D + Click
    const minutes = String(date.getMinutes()).padStart(2, "0"); // 명시적 형변환이 일어남
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML= `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);
const images = ["0.jpg","1.jpg","2.jpg"];
const randomCount1 = Math.floor(Math.random() * images.length); // length = 배열 안의 개수
const randomImage1 = images[randomCount1];
const body = document.querySelector("body");
const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage1}`;
//console.log(body);
body.style.cssText = ` min-height: 100%; overflow-y: hidden; background-image:url("${bgImage.src}"); background-repeat: no-repeat; background-size : 100% 100%; `
//document.body.appendChild(bgImage);
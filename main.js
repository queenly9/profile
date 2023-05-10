let target = document.querySelector("#dynamic");
let stringArr = ["HTML", "CSS", "JAVASCRIPT", "PYTHON"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

function randomString() {
  let stringArr = ["HTML", "CSS", "JAVASCRIPT", "PYTHON"];
  return stringArr[Math.floor(Math.random() * stringArr.length)].split("");
}

function resetTyping() {
  target.textContent = "";
  let randomArr = randomString();
  dynamic(randomArr);
}

function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(selectStringArr);

console.log(selectString);
console.log(selectStringArr);

function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);

let hiddenElement = document.querySelector(".hidden");
let hiddenElement1 = document.querySelector(".hidden1");
let hiddenElement2 = document.querySelector(".hiddenimg");

function handleScroll2() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 400) {
    hiddenElement2.classList.add("visible");
  } else {
    hiddenElement2.classList.remove("visible");
  }
}

function handleScroll() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 1000) {
    hiddenElement.classList.add("visible");
  } else {
    hiddenElement.classList.remove("visible");
  }
}

function handleScroll1() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 2000) {
    hiddenElement1.classList.add("visible");
  } else {
    hiddenElement1.classList.remove("visible");
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("scroll", handleScroll1);
window.addEventListener("scroll", handleScroll2);

var Target = document.getElementById("clock");
function clock() {
  var time = new Date();

  var year = time.getFullYear();
  var month = time.getMonth();
  var date = time.getDate();
  var day = time.getDay();
  var week = ["일", "월", "화", "수", "목", "금", "토"];

  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  Target.innerText =
    `${year}년 ${month + 1}월 ${date}일 ${week[day]}요일 ` +
    `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
clock();
setInterval(clock, 1000);

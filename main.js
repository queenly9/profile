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

function handleScroll() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    hiddenElement.classList.add("visible");
  }
}

window.addEventListener("scroll", handleScroll);

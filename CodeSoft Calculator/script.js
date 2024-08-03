let keypad = document.getElementsByClassName("child");
let opretor = document.getElementsByClassName("child1");
let head = document.getElementById("output");
let IsfirstNumber = true;
let opt = "";
let eual = document.querySelector(".child3");
let clear = document.querySelector(".child2");

let firstNumber = "";
let secondNumber = "";

eual.addEventListener("click", function () {
  head.innerText = calculate(firstNumber, secondNumber, opt);
});

for (let i = 0; i < keypad.length; i++) {
  keypad[i].addEventListener("click", function () {
    if (IsfirstNumber == true) {
      firstNumber += keypad[i].innerText;
      head.innerText = firstNumber;
    } else {
      secondNumber += keypad[i].innerText;
      head.innerText = secondNumber;
    }
  });
}

for (let i = 0; i < opretor.length; i++) {
  opretor[i].addEventListener("click", function () {
    IsfirstNumber = false;
    opt = opretor[i].innerText;
  });
}

clear.addEventListener("click", function () {
  firstNumber = "";
  secondNumber = "";
  opt = "";
  IsfirstNumber = true;
  head.innerText = "";
});

function calculate(firstNumber, secondNumber, opt) {
  switch (opt) {
    case "+":
      return Number(firstNumber) + Number(secondNumber);
    case "-":
      return Number(firstNumber) - Number(secondNumber);
    case "*":
      return Number(firstNumber) * Number(secondNumber);
    case "/":
      return Number(firstNumber) / Number(secondNumber);
  }
}

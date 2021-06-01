const calcKeys = document.querySelectorAll(".number");
const calcScreen = document.querySelector("#calc__no");
const BigScreen = document.querySelector("#calc__screen");
const deleteButton = document.querySelector("#del");
const resetButton = document.querySelector(".reset");
const equalButton = document.querySelector(".equal");
const multiplay = document.querySelector(".multi");
const theme1 = document.querySelector(".theme1");
const theme2 = document.querySelector(".theme2");
const theme3 = document.querySelector(".theme3");
const del = document.querySelector("#del");
const body = document.querySelector("body");
const titleTheme = document.querySelector(".title__theme");
const switcho = document.querySelector(".switch");
const keys = document.querySelectorAll(".ckeys");
const buttons = document.querySelector(".main__btns");
const keypad = document.querySelector(".keypad");

// writting numbers
for (key of calcKeys) {
  key.addEventListener("click", (e) => {
    const keyValue = e.target.innerText;
    calcScreen.innerHTML += keyValue.toString();
  });
}
const change1 = () => {
  body.style.backgroundColor = "hsl(222, 26%, 31%)";
  titleTheme.style.color = "white";
  calcScreen.style.color = "white";
  switcho.style.backgroundColor = "hsl(223, 31%, 20%)";
  BigScreen.style.backgroundColor = "hsl(224, 36%, 15%)";
  del.style.backgroundColor = "hsl(225, 21%, 49%)";
  del.style.boxShadow = "0px 4px hsl(224, 28%, 35%)";
  buttons.style.color = "hsl(221, 14%, 31%)";
  for (key of keys) {
    key.style.backgroundColor = "hsl(30, 25%, 89%)";
    key.style.boxShadow = "0px 4px hsl(28, 16%, 65%)";
  }
  equalButton.style.backgroundColor = "hsl(6, 63%, 50%)";
  equalButton.style.boxShadow = " 0px 4px hsl(6, 70%, 34%)";
  resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
  resetButton.style.boxShadow = "0px 4px hsl(224, 28%, 35%)";
  keypad.style.backgroundColor = "hsl(223, 31%, 20%)";
  theme1.style.backgroundColor = "hsl(6, 63%, 50%)"
  theme2.style.opacity = 0
  theme3.style.opacity = 0
  theme1.style.opacity = 1
};

const change2 = () => {
  body.style.backgroundColor = "hsl(0, 0%, 90%)";
  titleTheme.style.color = "hsl(60, 10%, 19%)";
  calcScreen.style.color = "hsl(60, 10%, 19%)";
  switcho.style.backgroundColor = "hsl(0, 5%, 81%)";
  BigScreen.style.backgroundColor = "hsl(0, 0%, 93%)";
  del.style.backgroundColor = "hsl(185, 42%, 37%)";
  del.style.boxShadow = "0px 4px hsl(185, 58%, 25%)";
  buttons.style.color = "hsl(60, 10%, 19%)";
  for (key of keys) {
    key.style.backgroundColor = "hsl(45, 7%, 89%)";
    key.style.boxShadow = "0px 4px hsl(35, 11%, 61%)";
  }
  equalButton.style.backgroundColor = "hsl(25, 98%, 40%)";
  equalButton.style.boxShadow = " 0px 4px hsl(25, 99%, 27%)";
  resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
  resetButton.style.boxShadow = "0px 4px hsl(185, 58%, 25%)";
  keypad.style.backgroundColor = "hsl(0, 5%, 81%)";
  theme2.style.backgroundColor = "hsl(25, 98%, 40%)"
  theme3.style.opacity = 0
  theme1.style.opacity = 0
  theme2.style.opacity = 1
};
const change3 = () => {
  body.style.backgroundColor = "hsl(268, 75%, 9%)";
  titleTheme.style.color = "hsl(52, 100%, 62%)";
  calcScreen.style.color = "hsl(52, 100%, 62%)";
  switcho.style.backgroundColor = "hsl(268, 71%, 12%)";
  BigScreen.style.backgroundColor = "hsl(268, 71%, 12%) ";
  del.style.backgroundColor = "hsl(281, 89%, 26%)";
  del.style.boxShadow = "0px 4px hsl(285, 91%, 52%)";
  buttons.style.color = "hsl(52, 100%, 62%)";
  for (key of keys) {
    key.style.backgroundColor = "hsl(268, 47%, 21%)";
    key.style.boxShadow = "0px 4px hsl(290, 70%, 36%)";
  }
  equalButton.style.backgroundColor = "hsl(176, 100%, 44%)";
  equalButton.style.boxShadow = " 0px 4px hsl(177, 92%, 70%)";
  resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
  resetButton.style.boxShadow = "0px 4px hsl(285, 91%, 52%)";
  keypad.style.backgroundColor = "hsl(268, 71%, 12%)";
  theme3.style.backgroundColor = "hsl(176, 100%, 44%)"
  theme2.style.opacity = 0
  theme1.style.opacity = 0
  theme3.style.opacity = 1
};

// reset function
let reset = () => {
  calcScreen.innerHTML = "";
};
//Deleting the last written
let delLastLetter = () => {
  if (calcScreen.innerHTML === `Math Error`) {
    calcScreen.innerHTML = ` `;
  }
  removingLast = calcScreen.innerHTML.slice(0, -1);
  calcScreen.innerHTML = removingLast;
};
//calculate
let calculate = () => {
  //Calculation
  const formatter = new Intl.NumberFormat("en");
  const output = eval(calcScreen.innerHTML.replace(/,/g , ''));
  calcScreen.innerHTML = formatter.format(output);
  //  0 / any number
  if (calcScreen.innerHTML === "∞") {
    calcScreen.innerHTML = `Math Error`;
  }
};
//multiply
const multiplyop = (e) => {
  calcScreen.innerHTML += e.target.id;
};

// eventListeners
deleteButton.addEventListener("click", delLastLetter);
resetButton.addEventListener("click", reset);
equalButton.addEventListener("click", calculate);
multiplay.addEventListener("click", multiplyop);
theme1.addEventListener("click", change1);
theme2.addEventListener("click", change2);
theme3.addEventListener("click", change3);

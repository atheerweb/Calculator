const calcKeys = document.querySelectorAll(".number");
const calcScreen = document.querySelector("#calc__no");
const deleteButton = document.querySelector("#del");
const resetButton = document.querySelector(".reset");
const equalButton = document.querySelector(".equal");

// writting numbers
for (key of calcKeys) {
  key.addEventListener("click", (e) => {
    let keyValue = e.target.innerText;
    calcScreen.innerHTML += keyValue.toString();
  });
}


// reset function
let reset = () => {
  calcScreen.innerHTML = ""
}
//Deleting the last written
let delLastLetter = () => {
  removingLast = calcScreen.innerHTML.slice(0,-1)
  calcScreen.innerHTML = removingLast
};
//calculate 
let calculate = () =>{
  calcScreen.innerHTML = eval(calcScreen.innerHTML)
}
// eventListenrs

deleteButton.addEventListener("click", delLastLetter);
resetButton.addEventListener("click", reset);
equalButton.addEventListener("click", calculate);

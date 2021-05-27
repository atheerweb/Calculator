
const calcKeys = document.querySelectorAll(".numbers");
const calcScreen = document.querySelector("#calc__no");
for (key of calcKeys) {
  key.addEventListener("click", (e) => {
    let keyValue = e.target.innerText 
    calcScreen.innerHTML += keyValue.toString() 
    calcScreen.updateDisplay()
  });
}


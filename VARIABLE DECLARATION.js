//VARIABLE DECLARATION
let firstValue=  Math.floor(Math.random() * 100);
let secondValue= Math.floor(Math.random() * 100);

export function addQuestion() {
  document.querySelector(".popup").style.display = "flex";
}
function removeQuestion() {
  document.querySelector(".popup").style.display = "none";
}

export let arithmaticOperation = function (operation) {
  if (operation === "addition") {
    document.getElementById("area").innerHTML = "ADDITION WORKSHEET";
    //ADDITION RANDOM QUESTION GENRATOR
    document.getElementById("workArea").innerHTML =`${firstValue} + ${secondValue} =  ___________.`;
    removeQuestion();
  } else if (operation === "subtraction") {
    document.getElementById("area").innerHTML = "SUBTRACTION WORKSHEET";
    //SUBTRACTION RANDOM QUESTION GENRATOR
    document.getElementById("workArea").innerHTML = `${firstValue} - ${secondValue} =  ___________.`;
    removeQuestion();
  } else if (operation === "multiplication") {
    document.getElementById("area").innerHTML = "MULTIPLICATION WORKSHEET";
    //MULTIPLICATION RANDOM QUESTION GENRATOR
    document.getElementById("workArea").innerHTML = `${firstValue} * ${secondValue} = ___________.`;
    removeQuestion();
  } else if (operation === "division") {
    document.getElementById("area").innerHTML = " DIVISION WORKSHEET";
    //DIVIDE RANDOM QUESTION GENRATOR
    document.getElementById("workArea").innerHTML =`${firstValue} / ${secondValue} =  ___________.`;
    removeQuestion();
  }
};




// IMPORTING
import { addQuestion, arithmaticOperation } from "./addQuestion.mjs";

//DECLARATION
const addButton=document.getElementById("addition");
const subtractButton=document.getElementById("subtraction");
const multiplyButton=document.getElementById("multiplication");
const divideButton=document.getElementById("division");


document.getElementById("addQuestion").onclick = function () {addQuestion()};
addButton.addEventListener('click', event => {arithmaticOperation("addition");})
subtractButton.addEventListener('click', event => {arithmaticOperation("subtraction");})
multiplyButton.addEventListener('click', event => {arithmaticOperation("multiplication");})
divideButton.addEventListener('click', event => {arithmaticOperation("division");})


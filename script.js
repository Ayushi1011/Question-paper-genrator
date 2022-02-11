// IMPORTING
import { addQuestion, arithmaticOperation } from "./addQuestion.mjs";

//DECLARATION
const addButton=document.getElementById("addition");
const subtractButton=document.getElementById("subtraction");
const multiplyButton=document.getElementById("multiplication");
const divideButton=document.getElementById("division");
// const choiceAdd=document.getElementById("chooseNumberOfQuest");


document.getElementById("addQuestion").onclick = function () {addQuestion()};
addButton.addEventListener('click', event => {arithmaticOperation("addition");})
subtractButton.addEventListener('click', event => {arithmaticOperation("subtraction");})
multiplyButton.addEventListener('click', event => {arithmaticOperation("multiplication");})
divideButton.addEventListener('click', event => {arithmaticOperation("division");})


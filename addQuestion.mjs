//VARIABLE DECLARATION
let firstValue=  Math.floor(Math.random() * 100);
let secondValue= Math.floor(Math.random() * 100);

export function addQuestion() {
  document.querySelector(".popup").style.display = "flex";
}
function removeQuestion() {
  document.querySelector(".popup").style.display = "none";
}



// function iterVal(val,operation){
//   if (operation=='addition')
//   {  }


  

// }

export let arithmaticOperation = function (operation) {
  switch(operation){
    case 'addition':
      document.getElementById("area").innerHTML = "ADDITION WORKSHEET";
      //ADDITION RANDOM QUESTION GENRATOR
      document.getElementById("workArea").innerHTML =`${firstValue} + ${secondValue} =  ___________.`;
      // iterVal(parseInt(chooseNumberOfQuest.value),'addition');
      removeQuestion();
      break;

    case 'subtraction':
      document.getElementById("area").innerHTML = "SUBTRACTION WORKSHEET";
      //SUBTRACTION RANDOM QUESTION GENRATOR
      document.getElementById("workArea").innerHTML = `${firstValue} - ${secondValue} =  ___________.`;
      removeQuestion();
      break;

    case 'multiplication':
      document.getElementById("area").innerHTML = "MULTIPLICATION WORKSHEET";
      //MULTIPLICATION RANDOM QUESTION GENRATOR
      document.getElementById("workArea").innerHTML = `${firstValue} * ${secondValue} = ___________.`;
      removeQuestion();
      break;

    case 'division':
      document.getElementById("area").innerHTML = " DIVISION WORKSHEET";
      //DIVIDE RANDOM QUESTION GENRATOR
      document.getElementById("workArea").innerHTML =`${firstValue} / ${secondValue} =  ___________.`;
      removeQuestion();
      break;

    default:
      alert("Please select atleast one operation!!")
  }
};

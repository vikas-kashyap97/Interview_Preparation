let inputs = document.getElementById("inp")
let text = document.querySelector(".text")

function Add(){
    if (inputs.value === "") {
        alert ("Please enter yout task here!")
    } else {
        let newEle = document.createElement("ul")
        newEle.innerHTML = `${inputs.value}`
        text.appendChild(newEle)
        inputs.value = ""
    }
}
// **************************************************************

let calInputs1 = document.getElementById("input1")
let calInputs2 = document.getElementById("input2")
let result = document.querySelector(".result")



function calc() {
    let num1 = Number(calInputs1.value)
    let num2 = Number(calInputs2.value)


    if (calInputs1 === "" || calInputs2 === "") {
        alert ("please fill both inputs")
    } else {
      let sum =  num1 + num2
        result.value = sum
         calInputs1= ""
         calInputs2= ""
    }
}

// ***************************************************************

let textInput = document.getElementById("textInput");
let resultStr = document.querySelector(".resultStr");

function StrTotal() {
    
    let str = textInput.value.length;
    resultStr.value = str;
    textInput.value = "";
}

// ***************************************************************

let Stringtext = document.getElementById("Stringtext");
let resultTitle = document.querySelector(".resultTitle");

function TitleCase() {
    let text = Stringtext.value.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

  
    resultTitle.value = text;
    Stringtext.value = "";
}

// ***************************************************************


let numInput1 = document.getElementById("comm1");
let numInput2 = document.getElementById("comm2");
let resultInput = document.querySelector(".resultComm");

function RemoveDuplicates() {
    let num1 = numInput1.value;
    let num2 = numInput2.value;

    if (num1 === "" || num2 === "") {
        alert("Please fill both inputs");
    } else {
       
        let arr1 = num1.split(",").map(Number);
        let arr2 = num2.split(",").map(Number);

        
        let combineArray = [...arr1, ...arr2];
        let uniqueArray = [...new Set(combineArray)];

        
        resultInput.value = uniqueArray.join(", ");

      
        numInput1.value = "";
        numInput2.value = "";    
    }
}

// ***************************************************************


let numInpuut = document.getElementById("evod")
let resultInput2 = document.querySelector(".resultEvod");

function EvenOdd(){

    let number = Number(numInpuut.value)

    if (number % 2 === 0) {
        resultInput2.value =  "Even"
    } else {
        resultInput2.value =  "Odd"
    }
}

     
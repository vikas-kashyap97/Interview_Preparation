<<<<<<< HEAD
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


let textInput = document.getElementById("textInput");
let resultStr = document.querySelector(".resultStr");

function StrTotal() {
    
    let str = textInput.value;
    let StrTot = str.length;
    resultStr.value = StrTot;
    textInput.value = "";
}


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

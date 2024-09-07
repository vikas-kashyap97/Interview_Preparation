// let input = document.getElementById("InputText");
// let result = document.querySelector(".text");

// function Submit() {
//     if (input.value === "") {
//         alert("Please enter your task!");
//     } else {
//         let newEl = document.createElement("li");
//         newEl.innerHTML = `${input.value} <button onclick="Delete(this)">Delete</button>`;
//         result.appendChild(newEl);
//         input.value = "";
//     }
// }

// function Delete(element) {
//     element.parentElement.remove();
// }


// function Submit(){
//     if (input.value === "") {
//         alert ("Please fill the input area!")
//     } else {
//         let newEl = document.createElement("li")
//         newEl.innerHTML = `${input.value} <button onclick=Delete(this)>Delete</button>`
//         result.appendChild(newEl)
//         input.value = "" 
//        }
// }
//    function Delete(element){
//     element.parentElement.remove()
//    }

let inputs = document.getElementById("InputText");
let results = document.querySelector(".text")

function Submit(){
    if (inputs.value === "") {
        alert ("please fill the input field!")
    } else {
        let newElement = document.createElement("li")
        newElement.innerHTML = `${inputs.value} <button onclick=Delete(this)>Delete</button>`
        results.appendChild(newElement)
        inputs.value = ""
    }
}

function Delete(element){
    element.parentElement.remove()
}
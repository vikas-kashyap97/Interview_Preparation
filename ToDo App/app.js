let input = document.getElementById("InputText");
let result = document.querySelector(".text");

function Submit() {
    if (input.value === "") {
        alert("Please enter your task!");
    } else {
        let newEl = document.createElement("li");
        newEl.innerHTML = `${input.value} <button onclick="Delete(this)">Delete</button>`;
        result.appendChild(newEl);
        input.value = "";
    }
}

function Delete(element) {
    element.parentElement.remove();
}


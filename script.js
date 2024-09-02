// // Get the DOM elements
// const arraySpan = document.getElementById("array");
// const minSpan = document.getElementById("min");

// function findMin(arr) {
//     return Math.min(...arr);
// }

// // Parse the array from the text content
// const arrayText = arraySpan.textContent.trim();
// const arr = JSON.parse(arrayText);

// // Find the smallest number
// const smallestNumber = findMin(arr);

// // Update the DOM elements
// minSpan.textContent = smallestNumber;




// function totlaVal(str) {
//     return str.length;
// }


// const stringSpan = document.getElementById('string');
// const totalSpan = document.getElementById('total');


// const string = stringSpan.textContent;

// const totalChar = totlaVal(string);


// totalSpan.textContent = totalChar;

const stringSpan = document.getElementById('origStr')
const TitleSpan = document.getElementById('TitStr')

function TitleCase(str) {
    return str.toLowerCase()
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

const string = stringSpan.textContent;

const title = TitleCase(string);

TitleSpan.textContent = title;
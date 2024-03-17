//get elements for event triggers
const button = document.getElementById('button');
//event listener for button
button.addEventListener('click', Click);


const container = document.querySelector(".grid-Container");

const cellDiv = document.createElement('div');
cellDiv.classList.add('cell');

const rowDiv = document.createElement('div');
rowDiv.classList.add('row');

let dim =10;

function Click(){
    console.log("click")
   
    
    generateGrid(getNumberInput())
}

function getNumberInput(){
    while (true) { // Loop until valid input
        const userInput = prompt("Enter Grid Dimension (1-50): ");
        const numberRegex = /^\d+$/; // Regex for positive integers
    
        if (numberRegex.test(userInput)) {
          return Number(userInput); // Convert to number and return
        } else {
          alert("Please enter a valid number(Max=50).");
        }
      }
    }
   



function generateGrid(dim){
    for (let i=0; i<dim; i++){
        const newCell = cellDiv.cloneNode(true);
        rowDiv.appendChild(newCell);
        }
    for (let i=0; i<dim; i++){
        const newRow = rowDiv.cloneNode(true);
        container.appendChild(newRow);
    }

}
//selectors

var tableRow = document.getElementsByTagName('tr');
var tabeCell = document.getElementsByTagName('td');
var tableSlot = document.querySelector('.slot');
const playerTurn = document.querySelector('.playerTurn');
const reset = document.querySelector('.reset');

for(let i = 0; i < tabeCell.length; i++){
    tabeCell[i].addEventListener('click', (e) =>{
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
    })
}
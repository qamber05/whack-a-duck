function init() {
//all code goes here
const gridElem = document.querySelector('.grid')

const cells = []
const gridwidth = 10
const numberOfCells = gridwidth * gridwidth

function createGrid(){
    //for every cell wer require create a grid
    //then appen this cell to our grid

    for (let i=0;i<numberOfCells;i++){
        const cell=document.createElement('div')
        cell.classList.add('duck')
        cell.textContent= i
        cells.push(cell)  
        gridElem.appendChild(cell)

    }
   console.log(cells)
}
 createGrid()
}
document.addEventListener('DOMContentLoaded',init)
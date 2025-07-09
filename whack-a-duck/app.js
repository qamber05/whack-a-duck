function init() {
//all code goes here
const gridElem = document.querySelector('.grid')
const scoreElem = document.querySelector('#score-display')

const cells = []
const gridwidth = 10
const numberOfCells = gridwidth * gridwidth

let duckPosition = 50

let score = 0 

function addDuck() {
    cells[duckPosition].classList.add('duck')
}

function removeDuck() {
    cells[duckPosition].classList.remove('duck')

}

function play() {
//    setInterval(functiom() {

  //  })
  setInterval(()=> {
    removeDuck()
    duckPosition=Math.floor(Math.random() * numberOfCells)
    addDuck()  

  }, 3000 /* milisecs */)
}

function handleClick(event) {
    console.log('handle click has run!')
    if (event.target.classList.contains('duck')) {
        score +=10 
        scoreElem.textContent= `your score is ${score}`  
        console.log(score)
    }
}


function createGrid(){
    //for every cell wer require create a grid
    //then appen this cell to our grid

    for (let i=0;i<numberOfCells;i++){
        const cell=document.createElement('div')
       // cell.classList.add('duck')
        cell.textContent= i
        cell.addEventListener('click',handleClick)
        cells.push(cell)  
        gridElem.appendChild(cell)

    }
   console.log(cells)
}
 createGrid()
 play()
 // addDuck()
 // removeDuck()

}
document.addEventListener('DOMContentLoaded',init)
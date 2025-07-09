function init() {
//all code goes here
const gridElem = document.querySelector('.grid')
const scoreElem = document.querySelector('#score-display')
const audioElem = document.querySelector('#sound')

const cells = []
const gridwidth = 10
const numberOfCells = gridwidth * gridwidth

let duckPosition = 50

let score = 0 
scoreElem.textContent = `YOUR SCORE IS 0`
let totalDucks = 0

function addDuck() {
    cells[duckPosition].classList.add('duck')
    totalDucks++
}

function removeDuck() {
    cells[duckPosition].classList.remove('duck')

}

function endgame() {
    alert('game ended, score: ' + score)
    score = 0
    totalDucks = 0
}

function play() {
//    setInterval(functiom() {

  //  })
  setInterval(()=> {
    if (totalDucks < 10 ){ 
        removeDuck()
    duckPosition=Math.floor(Math.random() * numberOfCells)
    addDuck()  
    } else {
        endgame()
      
    }
    

  }, 3000 /* milisecs */)
}

function handleClick(event) {
    console.log('handle click has run!')
    if (event.target.classList.contains('duck')) {
        audioElem.pause()
        audioElem.currentTime = 0
        score +=10 
        scoreElem.textContent= `your score is ${score}`
        audioElem.play()   
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
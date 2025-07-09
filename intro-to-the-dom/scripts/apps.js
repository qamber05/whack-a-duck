function init() {
const titleElement= document.querySelector('#title')
console.log(titleElement)
titleElement.textContent = "changed to java script"
titleElement.style.textAlign = "center"

const notitleElement= document.querySelector('#notitle')
console.log(notitleElement)
notitleElement.style.color = "red"

const paragraphElement = document.getElementById('paragraph').style.color = "blue"

const bodyElement = document.querySelector('body')
const h2Element = document. createElement('h2')
h2Element.textContent= "apear plz"
console.log(h2Element)
bodyElement.appendChild(h2Element)
}
 
document.addEventListener("DOMContentLoaded",init)


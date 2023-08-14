const paintContainer = document.querySelector('.paint-container')
const GRIDWIDTH = document.querySelector('#grid-width')
const GRIDHEIGHT = document.querySelector('#grid-height')
const createGridBtn = document.querySelector('#create-grid-btn')
const clearBoard = document.querySelector('#clear-board')
const selectColor = document.querySelector('#select-color')

let CURRENTDRAWINGCOLOR = selectColor.value

const GRID = GRIDWIDTH.value * GRIDHEIGHT.value
let paintState = false

window.addEventListener('load', e => {
    initialize()
})

window.addEventListener('mousedown', e => {
    paintState = true
})

window.addEventListener('mouseup', e => {
    paintState = false
})

createGridBtn.addEventListener('click', e => {
    initialize()
})

selectColor.addEventListener('input', e => {
    CURRENTDRAWINGCOLOR = selectColor.value
})

function initialize () {
    paintContainer.innerHTML = ''
    let gridIndex = 1
    let gridBox

    while (gridIndex <= GRID) {
        gridBox = document.createElement('div')
        gridBox.setAttribute('class', 'box')
        gridBox.style.width = `${paintContainer.width / GRIDWIDTH}px`
        gridBox.style.height = `${paintContainer.height / GRIDHEIGHT}px`

        paintContainer.appendChild(gridBox)
        gridIndex++

        gridBox.addEventListener('mouseover', e => {
            if (paintState == true) {
                console.log('painting')
                e.target.style.backgroundColor = CURRENTDRAWINGCOLOR
            }
        })
        
        paintContainer.style.gridTemplateColumns = `repeat(${GRIDWIDTH.value}, 1fr)`
        paintContainer.style.gridTemplateRows = `repeat(${GRIDHEIGHT.value}, 1fr)`
    }   
    
    clearBoard.addEventListener('click', e => {
        let boxes = paintContainer.querySelectorAll('.box')

        for (let box of boxes) {
            box.style.backgroundColor = 'white'
        }
    })
}

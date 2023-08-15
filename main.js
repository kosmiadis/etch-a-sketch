const paintContainer = document.querySelector('.paint-container')
let GRIDWIDTH = document.querySelector('#grid-width')
let GRIDHEIGHT = document.querySelector('#grid-height')
const createGridBtn = document.querySelector('#create-grid-btn')
const clearBoard = document.querySelector('#clear-board')
const selectColor = document.querySelector('#select-color')

let CURRENTDRAWINGCOLOR = selectColor.value

let GRID = GRIDWIDTH.value * GRIDHEIGHT.value
let paintState = false

window.addEventListener('load', e => {
    initialize(document.querySelector('#grid-width'), document.querySelector('#grid-height'), )
})

window.addEventListener('mousedown', e => {
    paintState = true
})

window.addEventListener('mouseup', e => {
    paintState = false
})

createGridBtn.addEventListener('click', e => {
    GRIDWIDTH = document.querySelector('#grid-width')
    GRIDHEIGHT = document.querySelector('#grid-height')
    initialize(GRIDWIDTH, GRIDHEIGHT)
    console.log(GRID, GRIDWIDTH.value, GRIDHEIGHT.value)

    
})

selectColor.addEventListener('input', e => {
    CURRENTDRAWINGCOLOR = selectColor.value
})

function clearBoardFunction () {
    let boxes = paintContainer.querySelectorAll('.box')

    for (let box of boxes) {
        box.style.backgroundColor = 'white'
    }
}

function initialize (GRIDWIDTH, GRIDHEIGHT) {
    let gridIndex = 0
    let gridBox

    while (gridIndex <= GRIDWIDTH.value * GRIDHEIGHT.value) {
        gridBox = document.createElement('div')
        gridBox.setAttribute('class', 'box')
        gridBox.style.width = `${paintContainer.width / GRIDWIDTH}px`
        gridBox.style.height = 'auto'

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
        clearBoardFunction()
    })
}


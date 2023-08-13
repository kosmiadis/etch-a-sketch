const paintContainer = document.querySelector('.paint-container')

const GRID = 16 * 16
let paintState = false

window.addEventListener('load', e => {
    initialize()
})

window.addEventListener('mousedown', e => {
    paintState = true
    console.log(paintState)
})

window.addEventListener('mouseup', e => {
    paintState = false
})




function initialize () {
    paintContainer.innerHTML = ''
    let gridIndex = 1
    let gridBox
    

    while (gridIndex <= GRID) {
        gridBox = document.createElement('div')
        gridBox.setAttribute('class', 'box')
        paintContainer.appendChild(gridBox)
        gridIndex++

        

        gridBox.addEventListener('mouseover', e => {
            if (paintState == true) {
                console.log('painting')
                e.target.style.backgroundColor = 'orange'
            }
        })

        

        
    }    
}

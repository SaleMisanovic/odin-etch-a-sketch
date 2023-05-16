const gridSize = 16;

const container = document.querySelector('.container');

const createGrid = (gridSize) =>{
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < gridSize; j++) {
            const widthAndHeight = 960/gridSize
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mouseenter',()=>{
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)            
        }
        container.appendChild(row)
    }
}

createGrid(gridSize);
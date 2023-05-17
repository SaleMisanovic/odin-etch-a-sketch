const container = document.querySelector('.container');
let targetColor = "black";

const colorPickerContainer = document.getElementById("colorPickerContainer");
let prevButton = null;

colorPickerContainer.addEventListener('click',(e)=>{
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    e.target.style.background = "darkred"

    if(prevButton !== null) {
        prevButton.style.background = 'none';
     }
     prevButton = e.target;
     if (e.target.value == "rainbow") {
        targetColor = "rainbow";
     }else if(e.target.value == "black"){
        targetColor = "black";
     }else if(e.target.value == "white"){
        targetColor = "white";
     }
})

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };

const createGrid = (gridSize) =>{
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

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
                if (targetColor=="rainbow") {
                    pickedColor = randomRgbColor();
                    gridBox.style.backgroundColor = pickedColor;
                }else if(targetColor == "black"){
                    pickedColor = "black";
                    gridBox.style.backgroundColor = pickedColor;
                }else if(targetColor == "white"){
                    pickedColor = "white";
                    gridBox.style.backgroundColor = pickedColor;
                }                
            })
            row.appendChild(gridBox)            
        }
        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

createGrid(16);

const gridSetter = document.querySelector("#gridSetter");
gridSetter.addEventListener('click',()=>{
    const gridSize = Number(prompt("Please enter the number of squares on each side. Note: Maximum 100!"))
    if (gridSize > 100) {
        alert("Number of squares cannot be larger than 100!")
    }else{
        const wrapper = document.querySelector('.wrapper')
        if (!wrapper) {
            createGrid(gridSize)
        }else{
            wrapper.remove()
            createGrid(gridSize)
        }
    }
})


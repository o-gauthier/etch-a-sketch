const container = document.querySelector('#container');
numberOfSquare = 16;
gridSize = numberOfSquare * numberOfSquare;
widthOfSquare = (100/numberOfSquare).toLocaleString()+"%";


for (let i=0;i<gridSize;i++){
    const square = document.createElement('div');
    square.className= "square"
    square.style.width = widthOfSquare;
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
    square.style.background = "white"
      
    });
  }); 


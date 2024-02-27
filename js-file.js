createGrid();

const btn = document.querySelector('#btn')
btn.addEventListener('click',changeGrid)







function game() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.background = "white";

        });
    });
}
function createGrid(numberOfSquare = 16) {
    const container = document.querySelector('#container');
    gridSize = numberOfSquare * numberOfSquare;
    widthOfSquare = (100 / numberOfSquare).toLocaleString() + "%";
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.className = "square";
        square.style.width = widthOfSquare;
        container.appendChild(square);
    }
    game()
}
function changeGrid(){
    removeGrid();
    let userGridsSize = prompt("Grid size");
    createGrid(userGridsSize);
}
function removeGrid(){
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove()
    }); 
}

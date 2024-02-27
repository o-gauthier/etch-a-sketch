createGrid();

const btn = document.querySelector('#btn')
btn.addEventListener('click',changeGrid)







function game() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.background = random_bg_color();
            console.log(square.style.background);
            

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
    let userGridsSize = 101;
    while (userGridsSize > 100){
        userGridsSize = prompt("Choose a grid size under 100 squares")
    }
    createGrid(userGridsSize);
}
function removeGrid(){
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove()
    }); 
}
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor
}



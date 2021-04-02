document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert("O Jogo Terminou. O vencedor foi o Jogador " + (playerTime + 1));
        }, 10);

    }
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let playerTimeText = document.getElementById("playerTimeText");
    let symbol = board[position];

    if (symbol != '') {
        square.innerHTML = `<div class='${symbol}'></div>`
        playerTimeText.innerText = "Vez do Jogador " + (playerTime + 1);
    }
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}
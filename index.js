const DomElements = ()=>{
    const restartBtn = document.querySelector(".restart-btn");
    const turnMessage = document.querySelector(".turn-message");
    const gameTile = Array.from(document.querySelectorAll(".tile"));
    const win = document.querySelector(".winning-section");
    return{restartBtn, turnMessage, gameTile, win};
};

let board = ['', '', '', '', '', '', '', '', ''];

function handleResultValidation(currentPlayer) {
    let roundWon = false;
    let {condition} = winningCondition();
    let {whoWon} = won();
    for (let i = 0; i <= 7; i++) {
      const winCondition = condition[i];
    //   console.log("winconditon ___  --  "+winCondition);
    //   console.log("winconditon0 ___  --  "+ winCondition[0]);
    //   console.log("board 0___  --  "+ board[0]);
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
    //   console.log("a = "+ a);
    //   console.log("b = "+ b);
    //   console.log("c = "+ c);
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        whoWon(currentPlayer);
        break;
      }
    }
}

const gameBoard = ()=>{
    let isGameActive = true;
    currentPlayer = "X";   
    return{ isGameActive, currentPlayer};
}

const update = ()=>{
    const updateGameBoard  = (index, currentPlayer)=>{
        board[index] = currentPlayer;
    }
    return {updateGameBoard}
}

const winningCondition = ()=>{
    const condition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return {condition};
}
const restartGame = ()=>{
    let {restartBtn} = DomElements();
    const restart= ()=>{
        window.location.reload();
    }
    restartBtn.addEventListener("click", restart)
    return{restart}
}
const won = ()=>{
    let{win} = DomElements();
    let {restart}= restartGame();
    const whoWon = (currentPlayer)=>{
        win.classList.add("winning-section-show");
        let children = win.children[0];
        children.textContent = `Player ${currentPlayer} Won! `;
        setTimeout(() => {
            win.classList.remove("winning-section-show");
            restart();
        }, 2000);
    }
    return {whoWon};
}


// placing marker and checking if marker is already present or not
const placeMarker =( ()=>{
    const {gameTile} = DomElements();
    let {currentPlayer} = gameBoard();
    let {updateGameBoard} = update();
    gameTile.forEach( (tile, index) => {
        tile.addEventListener('click', (e) =>{
            let element = e.target;
            if(currentPlayer == "X"){
                element.textContent = "X";
                element.classList.add("x");
                updateGameBoard(index,currentPlayer);
                handleResultValidation(currentPlayer);
                currentPlayer = "O"
            }
            else{
                element.textContent = "O";
                element.classList.add("circle");
                updateGameBoard(index,currentPlayer);
                handleResultValidation(currentPlayer);
                currentPlayer = "X"
            }
        }, {once: true})
    })
})();

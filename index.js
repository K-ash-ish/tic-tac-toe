
const DomElements = ()=>{
    const restartBtn = document.querySelector(".restart-btn");
    const turnMessage = document.querySelector(".turn-message");
    const gameTile = Array.from(document.querySelectorAll(".tile"));
    const win = document.querySelector(".winning-section");
    return{restartBtn, turnMessage, gameTile, win};
};

const gameBoard = ()=>{
    let board = ['', '', '', '', '', '', '', '', ''];
}

const isValid = (tile)=>{

}

// placing marker and checking if marker is already present or not
const placeMarker =( ()=>{
    const {gameTile} = DomElements();
    gameTile.forEach( (tile, index) => {
        tile.addEventListener('click', (e) =>{
            let element = e.target;
            element.innerHTML = `<i class="fas fa-times fa-4x"></i> `;            
        }, {once: true})
    })
})();


const DomElements = ()=>{
    const restartBtn = document.querySelector(".restart-btn");
    const turnMessage = document.querySelector(".turn-message");
    const gameTile = Array.from(document.querySelectorAll(".tile"));
    const win = document.querySelector(".winning-section");
    const elementX = document.querySelector(".fas");
    const elementO = document.querySelector(".far");
    return{restartBtn, turnMessage, gameTile, win, elementO, elementX};
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
            if(!tile.hasChildNodes()){
                element.innerHTML = '<i class="fas fa-times fa-6x"></i>';
            }
            else {alert("wrong step");}
        })
    })
})();

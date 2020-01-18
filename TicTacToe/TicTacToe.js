// js for tic tac toe here
const container = document.getElementById('container');
const spotOne = document.getElementById('spot-one');
const spotTwo = document.getElementById('spot-two');
const spotThree = document.getElementById('spot-three');
const spotFour = document.getElementById('spot-four');
const spotFive = document.getElementById('spot-five');
const spotSix = document.getElementById('spot-six');
const spotSeven = document.getElementById('spot-seven')
const spotEight = document.getElementById('spot-eight');
const spotNine = document.getElementById('spot-nine');
const gameStateDisplay = document.getElementById('game-state');
const boardSpot = document.querySelectorAll('.boardspot')
// player and computer need to take turns - we need an object - an html element to say whos turn it is
// computer picking will be random for the time
// 


const Player = {
    marker: 'x'
}

const Computer = {
    marker: 'o'
}




const Gameboard = {
    board: [spotOne.textContent, spotTwo.textContent, spotThree.textContent,
    spotFour.textContent, spotFive.textContent, spotSix.textContent,
    spotSeven.textContent, spotEight.textContent, spotNine.textContent]
}

var gameState = (function () {
    let turn = 0;
    let whosTurn = ''; 
    function _findTurn() {
        if (turn % 2 === 0) {
            whosTurn = 'player';
            gameStateDisplay.textContent = 'Players turn ';
            marker = Player.marker;
        } else {
            whosTurn = 'computer';
            gameStateDisplay.textContent = 'Computers turn';
            marker = Computer.marker;
        }
        turn++
        console.log(whosTurn)
        console.log(turn)
        return marker;
    }
    return _findTurn
    // choose player or computer for marker
    // pick a square
    // set the textvalue of the square of the correct player or computer
    // evaluate board
    // switch to other player's turn and repeat
}());


var myGameBoard = (function () {
     
    return {
        board: [spotOne.textContent, spotTwo.textContent, spotThree.textContent,
        spotFour.textContent, spotFive.textContent, spotSix.textContent,
        spotSeven.textContent, spotEight.textContent, spotNine.textContent]
    }
}());

// the baord is going to be made into html
// we can use textContent to mark the spot

// this is an example of how we will manipulate the board
// Gameboard.board.splice(2, 1, Computer.marker)
// spotOne.textContent = Player.marker;

// const changeOne = () => { spotOne.textContent = Player.marker}; 


function placeMark(e){
    e.target.textContent = marker
    Gameboard.board.splice((Number(e.target.attributes.value.value) - 1), 1, marker)
    console.log(Gameboard.board)
    gameState();
};

boardSpot.forEach(item => {
    item.addEventListener('click', placeMark)
});

gameState();
console.log(Gameboard.board)
console.log(myGameBoard.board);

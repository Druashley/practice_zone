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
const boardSpot = document.querySelectorAll('.boardspot');
const playerOneName = document.getElementById('player-name');
const playerOneMarker = document.getElementById('player-marker');
const playerTwoName = document.getElementById('computer-name');
const playerTwoMarker = document.getElementById('computer-marker');
const startGame = document.getElementById('start-game')

// player and computer need to take turns - we need an object - an html element to say whos turn it is
// computer picking will be random for the time
// 

// const Player = {
//     marker: 'x'
// }
// const Computer = {
//     marker: 'o'
// }

const playerFactory = (marker, name) => {
    const winPhrase = () => gameStateDisplay.textContent = name + ' won the game.'
    return {marker, name, winPhrase};
};

const Player = playerFactory(playerOneMarker.value, playerOneName.value);
const Computer = playerFactory(playerTwoMarker.value, playerTwoName.value);




startGame.addEventListener('click', function(){  
    gameState();
});

const Gameboard = {
    board: [spotOne.textContent, spotTwo.textContent, spotThree.textContent,
    spotFour.textContent, spotFive.textContent, spotSix.textContent,
    spotSeven.textContent, spotEight.textContent, spotNine.textContent],
    boardSpots: function () {
       const rowOne = Gameboard.board[0] + Gameboard.board[3] + Gameboard.board[6]
       const rowTwo = Gameboard.board[1] + Gameboard.board[4] + Gameboard.board[7]
       const rowThree = Gameboard.board[2] + Gameboard.board[5] + Gameboard.board[8]
       const columnOne = Gameboard.board[0] + Gameboard.board[1] + Gameboard.board[2]
       const columnTwo = Gameboard.board[3] + Gameboard.board[4] + Gameboard.board[5]
       const columnThree = Gameboard.board[6] + Gameboard.board[7] + Gameboard.board[8]
       const crossOne = Gameboard.board[0] + Gameboard.board[4] + Gameboard.board[8]
       const crossTwo = Gameboard.board[2] + Gameboard.board[4] + Gameboard.board[6]
        return ([
            rowOne,
            rowTwo,
            rowThree,
            columnOne,
            columnTwo,
            columnThree,
            crossOne,
            crossTwo])
    }
}

var gameState = (function () {
    let turn = 0;
    function _findTurn() {
        if (turn % 2 === 0) {
            whosTurn = 'player';
            gameStateDisplay.textContent = Player.name + '\'s turn';
            marker = Player.marker;
        } else {
            gameStateDisplay.textContent = Computer.name +'\'s turn';
            marker = Computer.marker;
        }
        turn++
        return marker;
    }
    return _findTurn
}());

function placeMark(e) {
    if (!e.target.textContent) {
        e.target.textContent = marker
        Gameboard.board.splice((Number(e.target.attributes.value.value) - 1), 1, marker)
        gameState();
        getWinner();
    }
};

boardSpot.forEach(item => {
    item.addEventListener('click', placeMark)
});

function getWinner() {
    for (let i = 0; i < Gameboard.board.length; i++) {
        if (Gameboard.boardSpots()[i] == (Player.marker + Player.marker + Player.marker)) {
            return gameStateDisplay.textContent = Player.winPhrase();
        }
        if (Gameboard.boardSpots()[i] == (Computer.marker + Computer.marker + Computer.marker)) {
            return gameStateDisplay.textContent = Computer.winPhrase();
        }
    }
}



// choose player or computer for marker
// pick a square
// set the textvalue of the square of the correct player or computer
// evaluate board
// switch to other player's turn and repeat
// var myGameBoard = (function () {

//     return {
//         board: [spotOne.textContent, spotTwo.textContent, spotThree.textContent,
//         spotFour.textContent, spotFive.textContent, spotSix.textContent,
//         spotSeven.textContent, spotEight.textContent, spotNine.textContent]
//     }
// }());

// the baord is going to be made into html
// we can use textContent to mark the spot

// this is an example of how we will manipulate the board
// Gameboard.board.splice(2, 1, Computer.marker)
// spotOne.textContent = Player.marker;

// const changeOne = () => { spotOne.textContent = Player.marker}; 


const Gameboard = {
    board: [spotOne.textContent, spotTwo.textContent, spotThree.textContent,
    spotFour.textContent, spotFive.textContent, spotSix.textContent,
    spotSeven.textContent, spotEight.textContent, spotNine.textContent],
    grid: [spotOne, spotTwo, spotThree, spotFour, spotFive, spotSix, spotSeven, spotEight, spotNine],
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
    },
    setPlayer:  () => { Player = playerFactory(playerOneMarker.value, playerOneName.value);},
    setComputer: () => { Computer = playerFactory(playerTwoMarker.value, playerTwoName.value);},
    resetBoard:  () =>{
        winner = false;
        Gameboard.board = ['','','','','','','','',''];
        boardSpot.forEach(spot => {
        spot.textContent = '';
        });
    },
}    

export default Gameboard
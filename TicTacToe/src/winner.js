
const getWinner = function (Gameboard, Player, Computer,winner, gameStateDisplay) {
    for (let i = 0; i < Gameboard.board.length; i++) {
        if (Gameboard.boardSpots()[i] == (Player.marker + Player.marker + Player.marker)) {
            winner = true;
            return gameStateDisplay.textContent = Player.winPhrase();
        }
        if (Gameboard.boardSpots()[i] == (Computer.marker + Computer.marker + Computer.marker)) {
            winner = true;
            return gameStateDisplay.textContent = Computer.winPhrase();
        }
    } if (!Gameboard.board.includes("")) {
        winner = true;
        return gameStateDisplay.textContent = 'Tie, click the restart button to play again.'
    }
}

export default getWinner
class TicTacToeGame {
  play(player) {
    if (player === 'O')
      {throw new Error("Wrong player: it is X's turn");}
  }
}

module.exports = TicTacToeGame;

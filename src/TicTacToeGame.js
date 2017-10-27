class TicTacToeGame {
  constructor() {
    this.turn = 'X';
  }

  play(player, position) {
    if (player !== this.turn) {
      throw new Error("Wrong player: it is X's turn");
    }
    if (this.position === position) {
      throw new Error('Wrong move: position is already occupied');
    }

    this.position = position;
    if (player === 'X') { this.turn = 'O'; }
  }
}

module.exports = TicTacToeGame;

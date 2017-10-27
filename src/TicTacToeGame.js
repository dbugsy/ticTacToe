class TicTacToeGame {
  constructor() {
    this.turn = 'X';
    this.moves = [];
  }

  play(player, position) {
    if (player !== this.turn) {
      throw new Error("Wrong player: it is X's turn");
    }
    if (this.position === position) {
      throw new Error('Wrong move: position is already occupied');
    }

    this.position = position;
    this.moves.push(position);
    if (player === 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
  }

  isDraw() {
    if (this.moves.length === 9) return true;
    return false;
  }
}

module.exports = TicTacToeGame;

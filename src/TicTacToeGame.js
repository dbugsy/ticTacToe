class TicTacToeGame {
  constructor() {
    this.turn = 'X';
    this.moves = [];
  }

  play(player, position) {
    if (player !== this.turn) {
      throw new Error("Wrong player: it is X's turn");
    }
    if (this.moves.includes(position)) {
      throw new Error('Wrong move: position is already occupied');
    }

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

  get winner() {
    if (this.moves.length >= 1) return 'X';
  }
}

module.exports = TicTacToeGame;

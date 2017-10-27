class TicTacToeGame {
  constructor() {
    this.turn = 'X';
    this.newMoves = Array(9).fill();
  }

  play(player, position) {
    if (player !== this.turn) {
      throw new Error("Wrong player: it is X's turn");
    }
    if (this.newMoves[position]) {
      throw new Error('Wrong move: position is already occupied');
    }

    this.newMoves[position] = player;
    if (player === 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
  }

  isDraw() {
    return this.newMoves.every(position => position !== undefined);
  }

  get winner() {
    if (this.newMoves.slice(0, 2).every(position => position === 'X')) return 'X';
    if (this.newMoves.slice(0, 2).every(position => position === 'O')) return 'O';
  }
}

module.exports = TicTacToeGame;

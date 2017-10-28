class TicTacToeGame {
  constructor() {
    this.turn = 'X';
    this.moves = Array(9).fill();
  }

  play(player, position) {
    if (player !== this.turn) {
      throw new Error("Wrong player: it is X's turn");
    }
    if (this.moves[position]) {
      throw new Error('Wrong move: position is already occupied');
    }

    this.moves[position] = player;
    if (player === 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
  }

  isDraw() {
    return this.moves.every(position => position !== undefined);
  }

  winner() {
    if (this.moves.slice(0, 2).every(position => position === 'X')) return 'X';
    if (this.moves.slice(0, 2).every(position => position === 'O')) return 'O';
  }
}

module.exports = TicTacToeGame;

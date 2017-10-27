const TicTacToeGame = require('../src/TicTacToeGame');

describe('TicTacToe', () => {
  it('ensures X always plays first', () => {
    const game = new TicTacToeGame();
    expect(() => game.play('O', 0)).toThrow(new Error("Wrong player: it is X's turn"));
    expect(() => game.play('X', 0)).not.toThrow(new Error("Wrong player: it is X's turn"));
  });

  it('ensures player cannot play on occupied position', () => {
    const game = new TicTacToeGame();
    game.play('X', 0);
    expect(() => game.play('O', 0)).toThrow(new Error('Wrong move: position is already occupied'));
  });
});

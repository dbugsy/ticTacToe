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


  it('is not a draw unless all positions are occupied', () => {
    const game = new TicTacToeGame();
    expect(game.isDraw()).toEqual(false);
  });

  it('is a draw when all 9 positions are occupied', () => {
    const game = new TicTacToeGame();
    game.play('X', 0);
    game.play('O', 1);
    game.play('X', 2);
    game.play('O', 3);
    game.play('X', 4);
    game.play('O', 5);
    game.play('X', 6);
    game.play('O', 7);
    game.play('X', 8);
    expect(game.isDraw()).toEqual(true);
  });
});

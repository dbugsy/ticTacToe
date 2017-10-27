const TicTacToeGame = require('../src/TicTacToeGame');

describe('TicTacToe', () => {
  let game;

  beforeEach(() => {
    game = new TicTacToeGame();
  });

  it('ensures X always plays first', () => {
    expect(() => game.play('O', 0)).toThrow(new Error("Wrong player: it is X's turn"));
    expect(() => game.play('X', 0)).not.toThrow(new Error("Wrong player: it is X's turn"));
  });

  it('ensures player cannot play on occupied position', () => {
    game.play('X', 0);
    expect(() => game.play('O', 0)).toThrow(new Error('Wrong move: position is already occupied'));
  });

  it('is not a draw unless all positions are occupied', () => {
    expect(game.isDraw()).toEqual(false);
  });

  it('is a draw when all 9 positions are occupied', () => {
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

  it('has no winner until the game has been won', () => {
    expect(game.winner).not.toBeDefined();
  });

  it('is won when X occupies a horizontal row', () => {
    game.play('X', 0);
    game.play('O', 3);
    game.play('X', 1);
    game.play('O', 8);
    game.play('X', 2);
    expect(game.winner).toEqual('X');
  });

  it('is won when O occupies a horizontal row', () => {
    game.play('X', 6);
    game.play('O', 0);
    game.play('X', 3);
    game.play('O', 1);
    game.play('X', 8);
    game.play('O', 2);
    expect(game.winner).toEqual('O');
  });
});

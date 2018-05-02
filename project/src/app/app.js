import React from 'react';

import { makeMove, newGame } from '../logic';

import Tile from './tile';

import Message from './message';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class Game extends React.Component {


  state = newGame();




  clickedTile = (i) => {
    const board = this.state.board.slice();
    const css = this.state.class.slice();
    if (this.checkWinner(board) || board[i]) {
      return;
    }

    if (this.state.state) {
      css[i] = "tile plr1";
      board[i] = 'X';
    } else {
      css[i] = "tile plr2";
      board[i] = 'O';
    }

    this.setState({
      board: board,
      state: !this.state.state,
      class: css
    });
  }




  resetGame = (event) => {
    this.setState(newGame())
  };



  checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [line1, line2, line3] = lines[i];
      if (board[line1] && board[line1] === board[line2] && board[line1] === board[line3]) {
        if (board[line1] === 'X') {
          return 'Player #1';
        } else {
          return 'Player #2';
        }
      }
    }
    return null;
  }

  render() {

    const winner = this.checkWinner(this.state.board);
    let result;

    if (winner) {
      result = 'The winner is: ' + winner
    } else if (winner) {
      result = 'The winner is: ' + winner
    } else if (result == 'draw') {
      result = 'Draw'
    } else {
      result = <Message value={(this.state.state ? '  Player #1' : ' Player #2')} />
    }

    return (

      <div id="game">
        <div id="head">
          Malin's *amazing* TicTacToe
          </div>
        <div className="board">
          <Tile
            onClick={() => this.clickedTile(0)}
            value={this.state.board[0]} class={this.state.class[0]} />
          <Tile
            onClick={() => this.clickedTile(1)}
            value={this.state.board[1]} class={this.state.class[1]} />
          <Tile
            onClick={() => this.clickedTile(2)}
            value={this.state.board[2]} class={this.state.class[2]} />
          <Tile
            onClick={() => this.clickedTile(3)}
            value={this.state.board[3]} class={this.state.class[3]} />
          <Tile
            onClick={() => this.clickedTile(4)}
            value={this.state.board[4]} class={this.state.class[4]} />
          <Tile
            onClick={() => this.clickedTile(5)}
            value={this.state.board[5]} class={this.state.class[5]} />
          <Tile
            onClick={() => this.clickedTile(6)}
            value={this.state.board[6]} class={this.state.class[6]} />
          <Tile
            onClick={() => this.clickedTile(7)}
            value={this.state.board[7]} class={this.state.class[7]} />
          <Tile
            onClick={() => this.clickedTile(8)}
            value={this.state.board[8]} class={this.state.class[8]} />
        </div>
        <div id="status">{result}</div>
        <button className="reset" onClick={this.resetGame}>Reset</button>
      </div>
    );
  }

}
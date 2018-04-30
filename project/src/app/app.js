import React from 'react';

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
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(''),
      turn: 'X',
      class: Array(9).fill('')
    }
  }


  handleClick = (i) => {
    const squares = this.state.squares.slice();
    const css = this.state.class.slice();
    if (this.checkWinner(squares) || squares[i]) {
      return;
    }

    if (this.state.turn) {
      css[i] = "tile plr1";
      squares[i] = 'X';
    } else {
      css[i] = "tile plr2";
      squares[i] = 'O';
    }

    this.setState({
      squares: squares,
      turn: !this.state.turn,
      class: css
    });
  }


  checkWinner = (squares) => {
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
      if (squares[line1] && squares[line1] === squares[line2] && squares[line1] === squares[line3]) {
        if (squares[line1] === 'X') {
          return 'Player #1';
        } else {
          return 'Player #2';
        }
      }
    }
    return null;
  }




  resetButton = () => {
    this.setState({ squares: [], class: [], turn: true });
  }

  render(squares) {

    const winner = this.checkWinner(this.state.squares);
    let result;

    if (winner) {
      result = 'The winner is: ' + winner

    } else if (winner) {

      result = 'The winner is: ' + winner

    } else if (result == 'draw') {
      result = 'Draw'
    } else {
      result = <Message value={(this.state.turn ? '  Player #1' : ' Player #2')} />
    }





    return (

      <div id="game">
        <div id="head">
          Malin's *amazing* TicTacToe
          </div>
        <div className="board">
          <Tile
            onClick={() => this.handleClick(0)}
            value={this.state.squares[0]} class={this.state.class[0]} />
          <Tile
            onClick={() => this.handleClick(1)}
            value={this.state.squares[1]} class={this.state.class[1]} />
          <Tile
            onClick={() => this.handleClick(2)}
            value={this.state.squares[2]} class={this.state.class[2]} />
          <Tile
            onClick={() => this.handleClick(3)}
            value={this.state.squares[3]} class={this.state.class[3]} />
          <Tile
            onClick={() => this.handleClick(4)}
            value={this.state.squares[4]} class={this.state.class[4]} />
          <Tile
            onClick={() => this.handleClick(5)}
            value={this.state.squares[5]} class={this.state.class[5]} />
          <Tile
            onClick={() => this.handleClick(6)}
            value={this.state.squares[6]} class={this.state.class[6]} />
          <Tile
            onClick={() => this.handleClick(7)}
            value={this.state.squares[7]} class={this.state.class[7]} />
          <Tile
            onClick={() => this.handleClick(8)}
            value={this.state.squares[8]} class={this.state.class[8]} />
        </div>
        <div id="status">{result}</div>
        <button className="reset" onClick={this.resetButton}>Reset</button>
      </div>

    );
  }

}
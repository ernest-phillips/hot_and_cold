import React, { Component } from "react";

import "./App.css";

function EnterGuess(props) {
  //controlled forms react
  return <input type="text">{props.text}</input>;
}

function SubmitGuess(props) {
  return <button type="submit" />;
}

function PreviousGuess(props) {
  return (
    <div>
      <ul>
        <li />
      </ul>
    </div>
  );
}
function NewGame() {
  return <h3>New Game</h3>;
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: ["hot", "cold"],
      enteredGuess: {},
      guess: {},
      guessNum: []
    };
  }

  render() {
    return (
      <div>
        <h1>Hot or Cold</h1>
        <EnterGuess />
        <SubmitGuess />
        <PreviousGuess />
        <NewGame />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Header from "./header";
import GuessSection from "./guess-section";
import StatusSection from "./info-section";

import "./App.css";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: "Make your guess!",
      auralStatus: "",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: "Make your guess!",
      auralStatus: "",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGues(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: "Please enter a valid number" });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = "You're very COLD!";
    } else if (difference >= 30) {
      feedback = "You're cold!";
    } else if (difference >= 10) {
      feedback = "Getting Warm!";
    } else if (difference >= 1) {
      feedback = "Whoa you are HOT!";
    } else {
      feedback = "You Got It!";
    }
  }
}

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

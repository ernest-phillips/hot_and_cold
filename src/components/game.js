import React, { Component } from "react";

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

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
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    })
  }

  makeGuess(guess) {
    guess = parseInt(guess(10));
    if (isNaN(guess)) {
      this.setState({ feedbak: 'Please enter a valid number'});
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if(difference >= 50) {
      feedback = "You are Cold!"
    } else if(difference >= 30) {
      feedback = "You're getting Colder!"
    } else if(difference >= 10) {
      feedback = "You're getting Warmer!"
    } else if(difference >= 1) {
      feedback = "You're HOT!"
    } else {
      feedback = 'You got it!'
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

    document.title = feedback ? `${feedback} | Hot or Cold` : `Hot or Cold`;

  }

  generateAuralUpdate() {
    const { guesses, feedback } = this.state; 

    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.reverse().join(',')}`;

    if (guesses.length > 0) {
      auralStatus += `${pluralize ? 'In orer of most- to least-recent, they are' : 'It was' }: ${guesses.reverse().join(',')}`;
    }

    this.setState({ auralStatus });
  }

  render() {
    const { feedback, guesses, auralStatus } = this.state;
    const guessCount = guesses.length;

    return(
      <div>
        <Header 
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection 
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses}
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }

}
class Turn {
  constructor(guess, card) {
    this.userGuess = guess;
    this.currentCard = card;
    this.guessIsCorrect = false;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if (this.userGuess === this.currentCard.correctAnswer) {
      this.guessIsCorrect = true;
    } else {
      this.guessIsCorrect = false;
    }
  }

  giveFeedback() {
    if (this.guessIsCorrect) {
      return 'You are correct!';
    }
  }
}

module.exports = Turn;

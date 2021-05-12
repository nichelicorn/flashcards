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
    // console.log('the guess is :', this.guessIsCorrect);
  }

  giveFeedback() {
    if (this.guessIsCorrect) {
      return 'You are correct!';
    } else if (!this.guessIsCorrect) {
      return 'That was not correct. You can try again in the next round!';
    }
  }
}

module.exports = Turn;

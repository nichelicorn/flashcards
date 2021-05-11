class Turn {
  constructor(guess, card) {
    this.userGuess = guess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.userGuess;
  }
}

module.exports = Turn;

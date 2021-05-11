class Turn {
  constructor(guess, card) {
    this.userGuess = guess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }
}

module.exports = Turn;

class Round {
  constructor(deck) {
    this.deckInPlay = deck;
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
    this.isOver = false;
  }

  returnCurrentCard() {
    return this.deckInPlay.cards[0];
  }
}

module.exports = Round;


// Round
//
// Your Round class will be the object that:
  // takes in responses
  // records these guesses
  // (as well as if they are correct or incorrect).

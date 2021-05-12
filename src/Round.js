const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deckInPlay = deck;
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
    this.isOver = false;
  }

  returnCurrentCard() {
    return this.deckInPlay.cards[this.turnCount];
  }

  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.returnCurrentCard());
    this.turnCount++;
    currentTurn.evaluateGuess();
    // console.log('currentTurn <>>>', currentTurn);
    if(!currentTurn.guessIsCorrect) {
      this.incorrectGuesses.push(currentTurn.currentCard.id);
    }
    // console.log('evaluate <>>>', currentTurn);
  }
}

module.exports = Round;


// Round
//
// Your Round class will be the object that:
  // takes in responses
  // records these guesses
  // (as well as if they are correct or incorrect).

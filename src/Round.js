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
    return currentTurn.giveFeedback();
    // console.log('evaluate <>>>', currentTurn);
  }

  calculateScore() {
    let deckLength = this.deckInPlay.countCards();
    let numIncorrect = this.incorrectGuesses.length;
    let numCorrect = deckLength - numIncorrect;
    this.percentCorrect = Math.ceil((numCorrect / deckLength) * 100);
    return this.percentCorrect;
  }

  endRound() {
    let deckLength = this.deckInPlay.countCards();
    let turnsNum = this.turnCount;
    let cardsToPlay = deckLength - turnsNum;
    if (!cardsToPlay) {
      this.isOver = true;
    }
  }
}

module.exports = Round;


// Round
//
// Your Round class will be the object that:
  // takes in responses
  // records these guesses
  // (as well as if they are correct or incorrect).

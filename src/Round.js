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
    let currentCard = this.returnCurrentCard();
    let currentTurn = new Turn(guess, currentCard);
    this.turnCount++;
    currentTurn.evaluateGuess();
    if (!currentTurn.guessIsCorrect) {
      this.incorrectGuesses.push(currentTurn.currentCard.id);
    }
    return currentTurn.giveFeedback();
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
    return `** Round over! ** You answered ${this.calculateScore()}% of the questions correctly!`
  }
}

module.exports = Round;

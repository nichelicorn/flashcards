const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Card = require('./Card');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
    const cards = prototypeQuestions.map(question => {
      const card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      return card;
    });
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;

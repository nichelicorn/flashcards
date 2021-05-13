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
    // console.log('prototypeQuestions', prototypeQuestions); // an array of objects
    // iterate through the array prototypeQuestions and extract each object
    // instantiate a new Card with each object from the prototypeQuestions array
    // instantiate new Deck using card array
    const cards = prototypeQuestions.map(question => {
      // console.log('question', question);
      const card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      // console.log(card);
      return card;
    });
    const deck = new Deck(cards);
    // console.log(deck);
    this.currentRound = new Round(deck);
    // instantiate new Round using the new Deck
    // console.log('currentRound', this.currentRound)

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

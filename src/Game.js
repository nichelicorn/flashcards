const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
    // console.log('prototypeQuestions', prototypeQuestions); // an array of objects
    this.currentRound = new Round(prototypeQuestions);
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

class Round {
  constructor() {
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
    this.isOver = false;
  }
}

module.exports = Round;


// Round
//
// Your Round class will be the object that:
  // takes in responses
  // records these guesses
  // (as well as if they are correct or incorrect).

const chai = require('Chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round class', () => {
  let card1, card2, card3, deck1, turn1, turn2, turn3, round;

  beforeEach(() => {
    card1 = {
      "id": 1,
      "question": "At what age did Ahsoka Tano become a Jedi Padawan?",
      "answers": ["12", "14", "17"],
      "correctAnswer": "14"
    };
    card2 = {
      "id": 2,
      "question": "Who was Ahsoka's teacher?",
      "answers": ["Yoda", "Plo Koon", "Anakin Skywalker"],
      "correctAnswer": "Anakin Skywalker"
    };
    card3 = {
      "id": 3,
      "question": "Did Ahsoka fight with Darth Maul on Mandalore?",
      "answers": ["true", "false"],
      "correctAnswer": "true"
    };
    deck = new Deck([card1, card2, card3]);
    turn1 = new Turn('14', card1);
    turn2 = new Turn('Yoda', card2);
    turn3 = new Turn('true', card3);
    round = new Round();
  })

  describe('Round class properties', () => { // describes Round.constructor
    it.skip('should count the number of turns taken', () => {
      // write testing for this condition when testing Round.takeTurn
    })
  })

  describe('A method to return the current card in play', () => { // describes Round.returnCurrentCard
    it.skip('should return the current card', () => {
      expect(round.returnCurrentCard()).to.deep.equal(card1);
    })

    it.skip('should return the first card in the deck at the start of the round', () => {
      expect(round.returnCurrentCard()).to.deep.equal(card1);
    })
  })

  describe('A method to record the steps for each turn', () => { // describes Round.takeTurn
    it.skip('should create a new Turn instance', () => {
      expect(round.takeTurn()).to.create.an.instanceof(Turn);
    })

    it.skip('should update the turn counter', () => {
      round.takeTurn();

      expect(round.turnCount).to.equal(1);
    })

    it.skip('should update the turn counter regardless of a correct answer', () => {
      round.takeTurn();
      round.takeTurn();
      round.takeTurn();

      expect(round.turnCount).to.equal(3);
    })
  })

})

// Your Round class should meet the following requirements:

// returnCurrentCard:
  // method that returns the current card being played
  // The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round

// takeTurn: method that
  // updates turns count
  // evaluates guesses
  // gives feedback
  // stores ids of incorrect guesses
  // When a guess is made, a new Turn instance is created.
  // The turns count is updated, regardless of whether the guess is correct or incorrect
  // The next card becomes current card
  // Guess is evaluated/recorded.
  // Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
  // Feedback is returned regarding whether the guess is incorrect or correct

// calculatePercentCorrect:
  // method that calculates and returns the percentage of correct guesses

// endRound:
  // method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’

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
    round = new Round(deck);
  })

  describe('Round class properties', () => { // describes Round.constructor
    it('should take in a deck of cards to play with', () => {
      expect(round.deckInPlay).to.deep.equal(deck);
    })

    it('should count the number of turns taken', () => {
      expect(round.turnCount).to.equal(0);
    })

    it('should have an array to store incorrect answers', () => {
      expect(round.incorrectGuesses).to.deep.equal([]);
    })

    it('should store the percentage of correct answers', () => {
      expect(round.percentCorrect).to.equal(0);
    })

    it('should keep track of progress in the round', () => {
      expect(round.isOver).to.equal(false);
    })
  })

  describe('A method to return the current card in play', () => { // describes Round.returnCurrentCard
    it.skip('should return the current card', () => { // return Turn.currentCard
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

    it.skip('should return the next card in the deck', () => {
      round.takeTurn();
      round.takeTurn();

      expect(round.returnCurrentCard()).to.deep.equal(card3);
    })

    it.skip('should evaluate each answer', () => { // invoke Turn.evaluateGuess
      expect(round.takeTurn()).to.equal(true);
    })

    it.skip('should store the id of incorrect answers', () => {
      round.takeTurn();
      round.takeTurn();

      expect(round.incorrectGuesses).to.deep.equal([2]);
    })

    it.skip('should tell the player if their answer is correct', () => { // invoke Turn.giveFeedback
      expect(round.takeTurn()).to.equal('You are correct!');
    })

    it.skip('should tell the player if their answer is incorrect', () => {
      round.takeTurn();

      expect(round.takeTurn()).to.equal('That was not correct. You can try again in the next round!');
    })
  })

  describe('A method to calculate the game score', () => {
    // it.skip('should return an error if the method runs before game play begins', () => { // not sure how to write a test for this yet ... more research will be needed 🕵️‍♀️
    //   round.calculatePercentCorrect();
    //
    //   expect(an error to be thrown in the terminal)
    // })

    it.skip('should calculate the percentage of correct answers', () => {
      round.takeTurn();
      round.takeTurn();
      round.takeTurn();
      round.calculatePercentCorrect();

      expect(round.percentCorrect).to.equal(67);
    })
  })

  describe('A method to alert a player when the game is over', () => { // describes Round.endRound
    it.skip('should end the round when all cards have been played', () => {
      round.takeTurn();
      round.takeTurn();
      round.takeTurn();
      round.calculatePercentCorrect();

      expect(round.isOver).to.equal(true);
    })

    it.skip('should return a message with the percentage of correct answers', () => {
      round.takeTurn();
      round.takeTurn();
      expect(round.takeTurn()).to.equal('** Round over! ** You answered 67% of the questions correctly!')
      // })
    })
  })
});


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

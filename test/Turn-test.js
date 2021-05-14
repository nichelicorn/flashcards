const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn class', () => {
  let card1, card2, card3, turn1, turn2, turn3;
  beforeEach(() => {
    card1 = new Card( 1, "At what age did Ahsoka Tano become a Jedi Padawan?", ["12", "14", "17"], "14" );
    card2 = new Card( 2, "Who was Ahsoka's teacher?", ["Yoda", "Plo Koon", "Anakin Skywalker"], "Anakin Skywalker" );
    card3 = new Card( 3, "Did Ahsoka fight with Darth Maul on Mandalore?", ["true", "false"], "true" );
    turn1 = new Turn('14', card1);
    turn2 = new Turn('Yoda', card2);
    turn3 = new Turn('true', card3);
  })

  describe('Turn class properties', () => {
    it('should store a user guess', () => {
      expect(turn1.userGuess).to.equal('14');
      expect(turn2.userGuess).to.equal('Yoda');
      expect(turn3.userGuess).to.equal('true');
    })

    it('should store a card in play', () => {
      expect(turn1.currentCard).to.deep.equal(card1); // test that it takes in an object
      expect(turn2.currentCard.id).to.equal(2); // test that the object can be read using dot notation
      expect(turn3.currentCard['correctAnswer']).to.equal('true'); // test that the object can be read using bracket notation
    })

    // it('should not start the turn if it is missing a guess', () => {
    //   let turn4 = new Turn( , card1);
    //   expect() ... // not sure how to write this test yet...
    // })

    // it('should not start the turn if it is missing a card', () => {
    //   let turn5 = new Turn('Anakin Skywalker', );
    //   expect() ... // not sure how to write this test yet...
    // })
  })

  describe('A method to return the player\'s guess', () => {
    it('should return the user guess', () => {
      expect(turn1.returnGuess()).to.equal('14');
      expect(turn2.returnGuess()).to.equal('Yoda');
      expect(turn3.returnGuess()).to.equal('true');
    })
  })

  describe('A method to return the card in play', () => { // describes Turn.returnCurrentCard
    it('should return the current card', () => {
      expect(turn1.returnCard()).to.deep.equal(card1);
      expect(turn2.returnCard()).to.deep.equal(card2);
      expect(turn3.returnCard()).to.deep.equal(card3);
    })
  })

  describe('A method to evaluate the player\'s guess', () => { // describes Turn.evaluateGuess
    it('should return true if the player\'s guess is correct', () => {
      turn1.evaluateGuess();
      turn3.evaluateGuess();

      expect(turn1.guessIsCorrect).to.equal(true);
      expect(turn3.guessIsCorrect).to.equal(true);
    })

    it('should return false if the player\'s guess is not correct', () => {
      turn2.evaluateGuess();

      expect(turn2.guessIsCorrect).to.equal(false);
    })
  })

  describe('A method to return feedback to the player', () => { // describes Turn.giveFeedback
    it('should return a message if the player\'s guess is correct', () => {
      turn1.evaluateGuess();
      turn3.evaluateGuess();

      expect(turn1.giveFeedback()).to.equal('correct! 🎉');
      expect(turn3.giveFeedback()).to.equal('correct! 🎉');
    })

    it('should return a different message if the player\'s guess is not correct', () => {
      expect(turn2.giveFeedback()).to.equal('not correct. 🌚 You can try again in the next round!');
    })
  })
})

const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn class', () => {
  let card1, card2, card3, turn1, turn2, turn3;
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

    // it('should not start the turn if it is missing a guess', () => { // not sure how to write this test yet...
    //   let turn4 = new Turn( , card1);
    //   expect()
    // })

    // it('should not start the turn if it is missing a card', () => { // not sure how to write this test yet...
    //   let turn5 = new Turn('Anakin Skywalker', );
    //   expect()
    // })
  })

  describe('A method to return the player\'s guess', () => {
    it('should return the user guess', () => {
      expect(turn1.returnGuess()).to.equal('14');
      expect(turn2.returnGuess()).to.equal('Yoda');
      expect(turn3.returnGuess()).to.equal('true');
    })
  })

  describe('A method to return the card in play', () => {
    it('should return the current card', () => {
      expect(turn1.returnCard()).to.deep.equal(card1);
      expect(turn2.returnCard()).to.deep.equal(card2);
      expect(turn3.returnCard()).to.deep.equal(card3);
    })
  })

  describe('A method to evaluate the player\'s guess', () => {
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

  describe('A method to return feedback to the player', () => {
    it('should return a message if the player\'s guess is correct', () => {
      turn1.evaluateGuess();
      turn3.evaluateGuess();

      expect(turn1.giveFeedback()).to.equal('correct!');
      expect(turn3.giveFeedback()).to.equal('correct!');
    })

    it('should return a different message if the player\'s guess is not correct', () => {
      expect(turn2.giveFeedback()).to.equal('That was not correct. You can try again in the next round!');
    })
  })
})

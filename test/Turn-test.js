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
      expect(turn3.currentCard[correctAnswer]).to.equal('true'); // test that the object can be read using bracket notation
    })

    // it('should not start the turn if it is missing a guess', () => { // not sure how to write this test yet...
    //   let turn4 = new Turn( , card1);
    //   expect()
    // })

    // it('should not start the turn if it is missing a card', () => { // not sure how to write this test yet...
      // let turn5 = new Turn('Anakin Skywalker', );
      // expect()
    // })
  })

  // describe('A method to ...')

})

// Your Turn class should meet the following requirements:
// Instantiated with two arguments - √ a string (that represents a user’s guess to the question), and a Card object for the current card in play.
// returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.

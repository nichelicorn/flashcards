const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck class', () => {
  let testCards, deck;

  beforeEach(() => {
    testCards = [{
      "id": 1,
      "question": "At what age did Ahsoka Tano become a Jedi Padawan?",
      "answers": ["12", "14", "17"],
      "correctAnswer": "14"
    },
    {
      "id": 2,
      "question": "Who was Ahsoka's teacher?",
      "answers": ["Yoda", "Plo Koon", "Anakin Skywalker"],
      "correctAnswer": "Anakin Skywalker"
    },
    {
      "id": 3,
      "question": "Did Ahsoka fight with Darth Maul on Mandalore?",
      "answers": ["true", "false"],
      "correctAnswer": "true"
    }];
    deck = new Deck(testCards);
  })

  it('should have an array of card objects', () => {
    expect(deck.cards).to.deep.equal(testCards);
  })

  it('should have a method to count the cards in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  })
})

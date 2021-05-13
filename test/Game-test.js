const chai = require('Chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game class', () => {
  let card1, card2, card3, deck, round, game;

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
    round = new Round(deck);
    game = new Game();
  })

  it('should have a class structure', () => {
    expect(Game).to.be.a('function');
  })

  it('should instantiate a new Game', () => {
    expect(game).to.be.an.instanceof(Game);
  })

  it('should store the current Round', () => {
    expect(game.currentRound).to.deep.equal({});
  })

  describe('A method to start the game', () => { // describes Game.start
    it('should have a method to start the game', () => {
      expect(game.start).to.be.a('function');
    })

    it('should create Cards for the deck', () => {
      game.start()

      expect(game.currentRound.deckInPlay.cards[0]).to.be.an.instanceof(Card);
    })

    it('should put Cards in the Deck', () => {
      game.start();

      expect(game.currentRound.deckInPlay).to.be.an.instanceof(Deck);
    })

    it('should start a new Round', () => {
      game.start();

      expect(game.currentRound).to.be.an.instanceof(Round);
    })
  })
})

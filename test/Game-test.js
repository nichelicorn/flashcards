const chai = require('Chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game class', () => {
  let game;

  beforeEach(() => {
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

    it('should take in a Deck as an argument', () => {
      game.start();

      expect(game.currentRound.deckInPlay).to.be.an.instanceof(Deck);
    })

    it.skip('should invoke the method printMessage', () => {
      // 🚨 DO NOT TEST `printMessage` or `printQuestion` - these are outside the scope of this project
      // expect(game.start()).to.equal(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
// -----------------------------------------------------------------------`)
    })

    it.skip('should invoke the method printQuestion', () => {
      // 🚨 DO NOT TEST `printMessage` or `printQuestion` - these are outside the scope of this project
    })
  })
})

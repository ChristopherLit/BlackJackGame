import Deck from './deck.js';


//IMPORT DECK HOW DO I DO THIS????????????

class Game {

    constructor() {
        this.deck = new Deck();
        this.players = []; //ONLY 1 PLAYER FOR NOW, ADD BOTS LATER
        this.currentPlayerIndex = 0;
        this.round = 1;
    }

    startGame() {
        
       
    }

    shuffleDeck() {
        
        this.deck.shuffle();
      
    }

    initializePlayers() {
       
    }

    dealInitialCards() {
        
       
    }

    playRound() {
       
       
    }

    endGame() {
        
      
    }
}
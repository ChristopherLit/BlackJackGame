import Deck from './deck.js';
import Player from './player.js';


class Game {

    constructor() {
        this.deck = new Deck();
        this.user = new Player(); //The 1 player
        this.dealer = new Player() //Dealer
        //this.players = []; //ONLY 1 PLAYER FOR NOW, ADD BOTS LATER
        //this.currentPlayerIndex = 0; //ONLY 1 PLAYER, CHANGE WHEN MORE PLAYERS ARE ADDED
        this.round = 1;
    }

    startGame() {

        this.initializePlayers();
        
       
    }

    shuffleDeck() {

        this.deck.shuffle();
      
    }

    initializePlayers() {

        //Deals 2 cards to the one player
        this.user.addCardToHand(this.deck.deal());
        this.user.addCardToHand(this.deck.deal());

        this.dealer.addCardToHand(this.deck.deal());
        this.deler.addCardToHand(this.deck.deal());

    }


    playRound() {
       
       
    }

    endGame() {
        
      
    }
}
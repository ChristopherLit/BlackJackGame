export default class Deck {

    constructor() {
       
        this.cards = this.createDeck();
        this.shuffle();

    }

    createDeck() {

        const suit = ["Hearts", "Diamonds", "Clubs", "Spades"];
        const rank = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        const deck = [];

        for (let i = 0; i < suit.length; i++) {

            for (let j = 0; j < rank.length; j++) {

                deck.push({suit: suit[i], rank: rank[j]});

            }
            
          }


          return deck;
    }

    shuffle() {

        for (let i = 0; i < this.cards.length; i++) {

            let temp = this.cards[i];
            let randomNumber = Math.floor(Math.random() * this.cards.length);

            this.cards[i] = this.cards[randomNumber];
            this.cards[randomNumber] = this.cards[i];


        }

    }

    deal() {

        if (this.isEmpty() == false) {

            return this.cards.pop();
            
        } else {

            //If deck is empty...
            //Only worry about this when there's multiple players

        }


    }

    isEmpty() {

        if (this.cards.length == 0) {

            return true;

        } else {

            return false;
        }


    }


}
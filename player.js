
export default class Player {
    constructor(name) {
        this.name = name;
        this.hand = []; 
    }

    
    addCardToHand(card) {
        this.hand.push(card);
    }

    
    calculateHandValue() {
        
        total = 0;
        anyAces = false;

        for (let i = 0; i < this.hand.length; i++) {

            if (hand[i].rank == "J" || hand[i].rank == "Q" || hand[i].rank == "K") {

                total += 10;
                
            } else if (hand[i].rank == "A") {

                total += 11; //Assume 11 for now
                anyAces = true;


            } else {

                total += hand[i].rank;

            }

            if (total > 21 && anyAces == true) {

                anyAces = false;
                total = total - 10; //Make the ace equal 1
            }

        }

        return total;
    }

}

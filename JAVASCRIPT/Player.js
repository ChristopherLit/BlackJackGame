
export default class Player {
    constructor(name, amount) {
        this.name = "Christopher"; //(HARDCODED)
        this.hand = []; 
        this.amount = 500; //Amount of money from MongoDB (HARDCODED)
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

    getAmount() {

        return this.amount;
    }

    makeBet(bettingAmount) {

        this.amount = this.amount - bettingAmount;

    }

    increaseAmount(winningAmount) {

        this.amount = this.amount + winningAmount;

    }

}

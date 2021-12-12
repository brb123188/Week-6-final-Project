// Card Class
class Card {
    constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
    }
}
 
   //Deck Class
 class Deck {
     constructor(){
         this.cardsInDeck=[]
     }
            
     createDeck() {
     const suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
     const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
     const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
     
    

    for ( let  i = 0; i < suits.length; i++ ) {
        for ( let j = 0; j < ranks.length; j++ ) {
                this.cardsInDeck.push(new Card(suits[i], ranks[j], values[j]));
        }
    
    }
}
// shuffle the deck

shuffleDeck() {
 for (var i = 0; i < this.cardsInDeck.length; i++) {
    let tempCard = this.cardsInDeck[i];
    let randomPosition = math.floor(Math.random() * 52)
    this.cardsInDeck[i] = this.cardsInDeck[randomPosition];
    this.cardsInDeck[randomPosition] = tempCard;
        }
    }
}

//create a player
class Player {
    constructor(name) {
        this.playersName = name;
        this.players[0].playersScore = 0
        this.players[1].playersScore = 0
}
}


class War {
    constructor(){
        this.cardsInPlay = [];
        this.players = [];
    }

    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();
        this.players[0].playersCards = deck.cardsInDeck.slice(0, 26);
        this.players[1].playersCards = deck.cardsInDeck.slice(26, 52);
    }
}
// loop through each index in the players cards comparing them.
compareCards() 
    let handOne = this.players[ 0 ].playerCards;
    let handTwo = this.players[ 1 ].playerCards;
    
    while( this.players[ 0 ].playerCards.length > 0 ) {
        let playerOneCard = handOne.shift();
        let playerTwoCard = handTwo.shift(); 
    
        if( +playerOneCard.value > +playerTwoCard.value ) {
            this.players[ 0 ].playerScore += 1;
            console.log( this.players[ 0 ].playerName, "earns one point with", playerOneCard, "over", `${this.players[1].playerName}s`, playerTwoCard );

            } else if( +playerOneCard.value < +playerTwoCard.value ) {
            this.players[ 1 ].playerScore += 1;
            console.log( this.players[ 1 ].playerName, "earns one point with", playerTwoCard, "over", `${this.players[0].playerName}s`, playerOneCard);
            
            } else {
            console.log( "tie!", playerOneCard, playerTwoCard );
        }
    }
        if( this.players[ 0 ].playerScore > this.players[ 1 ].playerScore ){
        alert( `${this.players[0].playerName} won with a score of: ${this.players[0].playerScore} 
         ${this.players[1].playerName} had a score of: ${this.players[ 1 ].playerScore}` )

        } else
        alert( `${this.players[1].playerName} won with a score of: ${this.players[1].playerScore}  
        ${this.players[0].playerName} had a score of: ${this.players[0].playerScore}` )
       




let playGame = new playWar();
playGame.start();
playGame.dealDeck();
playGame.compareCards();
    































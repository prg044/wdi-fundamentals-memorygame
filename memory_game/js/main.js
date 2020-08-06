
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		//alert("You found a match!");
		console.log("You found a match!");
	} else {
		//alert("Sorry, try again.");
		console.log("Sorry, try again.");
	}
};

function flipcard(cardId) {

console.log("User flipped a " + cards[cardId]);
cardsInPlay.push(cards[cardId]);

let i = 0;

if (cardsInPlay.length === 2) {
	checkForMatch();	
} else {console.log("Draw a second card");}

};	

flipcard(0);

flipcard(2);
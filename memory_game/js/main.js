
let cards = [
{
	rank: "queen", 
 	suit: "hearts",
 	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen", 
 	suit: "diamonds",
 	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king", 
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king", 
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
}
];
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

console.log("User flipped a " + cards[cardId].rank);
console.log( cards[cardId].cardImage);
console.log( cards[cardId].suit);

cardsInPlay.push(cards[cardId].rank );

let i = 0;

if (cardsInPlay.length === 2) {
	checkForMatch();
	cardsInPlay.pop();
	cardsInPlay.pop();	
} else {console.log("Draw a second card");}

};	

flipcard(0);

flipcard(2);
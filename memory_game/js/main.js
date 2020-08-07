
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
		alert("You found a match!");
		//console.log("You found a match!");
	} else {
		alert("Sorry, try again.");
		//console.log("Sorry, try again.");
	}
};

function flipcard() {
	let cardId = this.getAttribute('data_id');
	console.log("User flipped a " + cards[cardId].rank);
	console.log( cards[cardId].cardImage);
	console.log( cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank );

	this.setAttribute(src,cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
		//cardsInPlay.pop();
		//cardsInPlay.pop();	
	} else {console.log("Draw a second card");}
};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
     	let cardElement = document.createElement('img');
  		cardElement.setAttribute('src', 'images/back.png');
  		cardElement.setAttribute('data-id', i);
  		
  		document.getElementsById('game-board').appendChild(cardElement);
  		cardElement.addEventListener('click', flipcard);
	};
};

createBoard();


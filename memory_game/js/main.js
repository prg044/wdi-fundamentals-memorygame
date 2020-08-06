
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[0];
let i = 0;

cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	while (i < 2) {
		if (cardsInPlay[i] === "queen") {
			  console.log("User flipped a queen");
		} else {
				console.log("User flipped a king");
		  }
		i = i + 1;
	} 
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
} else {console.log("Draw a second card");}

	


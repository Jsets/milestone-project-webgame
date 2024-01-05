var dealersum = 0;
var yoursum = 0;

var hidden;
var deck;

var canhit = true; //ability to hit as long as playier is under 21 total

window.onload = function() {
    buildDeck();
}

function buildDeck() {
    let values =['A','1','2','3','4','5','6','7','8','9','10','J','Q','K']
    let types = ['cardSpades']
    deck = [];

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < types.length; j++){
            deck.push(types[j] + values[i]);
        }
        console.log(deck)
    }
}


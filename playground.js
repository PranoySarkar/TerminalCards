let Card = require('./card');

/**
 * This is the array where all the cards resides
 */
let cardDeck = [];

/**
 * This function is responsible for initializing the deck 
 */
function init() {
    let cards = [];
    cardDeck = [];
    let suites = ['diamond', 'heart', 'club', 'spade'];

    for (let eachSuit of suites) {
        cards.push(new Card(eachSuit, 'J'));
        cards.push(new Card(eachSuit, 'Q'));
        cards.push(new Card(eachSuit, 'K'));
        cards.push(new Card(eachSuit, 'A'));
        cards.push(new Card(eachSuit, '2'));
        cards.push(new Card(eachSuit, '3'));
        cards.push(new Card(eachSuit, '4'));
        cards.push(new Card(eachSuit, '5'));
        cards.push(new Card(eachSuit, '6'));
        cards.push(new Card(eachSuit, '7'));
        cards.push(new Card(eachSuit, '8'));
        cards.push(new Card(eachSuit, '9'));
        cards.push(new Card(eachSuit, '10'));

    }

    cardDeck = (cards);
    shuffle();

}


/**
 * This function  shuffles all the cards in "cardDeck"
 */
function shuffle() {

    let shuffleCards = new Array(cardDeck.length);

    for (eachCard of cardDeck) {

        let randomIndex = getRandomInteger(0, 51);

        while (shuffleCards[randomIndex] !== undefined) {
            //until any free place found 
            randomIndex = getRandomInteger(0, 51)
        }

        shuffleCards[randomIndex] = eachCard;
    }

    cardDeck = shuffleCards;
}


/**
 * Used for printing deck
 */
function printDeck() {
    cardDeck.forEach(card => {
        console.log(card.toString());
    })

}

/**
 * This function removes and returns the first card form "cardDeck"
 */
function pickCard() {

    let card = null;
    if (cardDeck.length > 0) {
        card = cardDeck.shift();
    }
    return card;
}


/**
 * Generate random index between min and max
 * @param {*} min min value 
 * @param {*} max max value
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = {
    init,
    printDeck,
    shuffle,
    pickCard
}
const readline = require("readline");
const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const playground = require('./playground');


let players = [];
/**
 * This is the main function where everything starts 
 */
function main() {

    console.clear();
    playground.init();

    players = []; // initializing players 

    /*
     * Creating dummy player
     */
    players.push({
        name: 'Player 1',
        cards: [],
    })

    promptUser();
}



/**
 * This function is responsible for showing  user choice and receiving user input input 
 * 
 */
function promptUser() {
    prompt.question(` 
    
 select any 

     1. Play a card
     2. Shuffle the deck 
     3. Restart the game
     4. See all my cards
----------------------------------------------------
     `, function(choice) {
        console.clear();
        if (handleUserChoice(choice.trim())) {
            promptUser();
        } else {
            //incase of user wants to restart 
            main();
        }

    });
}
/**
 * This function does the work request by user, from here only, all the core functionalities are called
 * @param {string} answer  given user choice
 * 
 */
function handleUserChoice(answer) {
    let promptAgain = true;
    switch (answer) {
        case '1':
            let card = playground.pickCard();
            if (card !== null) {
                console.log('Card Picked', card.toString());
                players[0].cards.push(card);
            } else {
                console.log('Deck Empty');
            }

            break;
        case '2':
            playground.shuffle();
            console.log('Deck shuffled')
            break;
        case '3':
            console.log('Game Restarted');
            promptAgain = false;
            break;
        case '4':

            let player1 = players[0];
            if (player1.cards.length > 0) {

                // to show all the cards in 1 line 
                let cardStr = player1.cards.reduce((acc, card) => {
                    return acc.toString() + ' ' + card.toString();
                });
                // this is needed when there is only one card
                console.log(cardStr.toString());
            } else {
                console.log('You don\'t have any card');
            }
            break;
        default:
            console.warn('Invalid Choice, select any number')
            break;
    }

    return promptAgain;

}

main();
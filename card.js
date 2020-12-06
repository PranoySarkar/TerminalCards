/**
 * This is the constructor function where all cards are getting created 
 * @param {string} suite card can belong to only four suits
 * @param {string} id id/number of the card 
 */
function Card(suite, id) {

    let err = this.sufficientParameters(suite, id);
    if (err) {
        throw new Error(err.message)
    }

    suite = this.getValidSuite(suite)
    if (suite === null) {
        throw new Error('Unrecognized suite')
    }

    id = this.getValidId(id)
    if (id === null) {
        throw new Error('Unrecognized Card ID')
    }



    this.suite = suite;
    this.id = id;



}


/**
 * This function is responsible for checking argument correctness
 * @param {string} suite card can belong to only four suits
 * @param {string} id id/number of the card 
 */
Card.prototype.sufficientParameters = function(suite, id) {
    let err = null;
    if (suite === undefined || suite === null || suite.trim === undefined || suite.trim().length === 0) {
        err = {};
        err.message = 'Invalid card suite'
    }

    if (id === undefined || id === null || id.trim == undefined || id.trim().length === 0) {
        if (err === null) {
            err = {};
        }
        err.message = (err.message === undefined ? '' : err.message + ' | ') + ' Invalid card ID'
    }

    return err;
}

/**
 * This function sensitizes the suite given by user, if invalid it returns null
 * @param {*} suite card suite
 * @returns suite object or null
 */
Card.prototype.getValidSuite = function(suite) {
    suite = suite.toLowerCase().trim();
    switch (suite) {
        case 'diamond':
            suite = {
                name: 'DIAMOND',
                viewName: '♦️'
            }
            break;
        case 'heart':
            suite = {
                name: 'HEART',
                viewName: '❤️'
            }
            break;
        case 'club':
            suite = {
                name: 'CLUB',
                viewName: '♣️'

            }
            break;
        case 'spade':
            suite = {
                name: 'SPADE',
                viewName: '♠️'
            }
            break;
        default:
            suite = null;
            break;
    }
    return suite;
}

/**
 * This function sensitizes the id given by user, if invalid it returns null
 * @param {*} id card id
 * @returns id object or null
 */
Card.prototype.getValidId = function(id) {
    id = id.toLowerCase().trim();
    switch (id) {
        case 'j':
            id = {
                name: 'J',
                viewName: 'J'
            }
            break;
        case 'q':
            id = {
                name: 'Q',
                viewName: 'Q'
            }
            break;
        case 'k':
            id = {
                name: 'K',
                viewName: 'K'
            }
            break;
        case 'a':
            id = {
                name: 'A',
                viewName: 'A'
            }
            break;
        case '2':
            id = {
                name: '2',
                viewName: '2'
            }
            break;
        case '3':
            id = {
                name: '3',
                viewName: '3'
            }
            break;
        case '4':
            id = {
                name: '4',
                viewName: '4'
            }
            break;
        case '5':
            id = {
                name: '5',
                viewName: '5'
            }
            break;
        case '6':
            id = {
                name: '6',
                viewName: '6'
            }
            break;
        case '7':
            id = {
                name: '7',
                viewName: '7'
            }
            break;
        case '8':
            id = {
                name: '8',
                viewName: '8'
            }
            break;
        case '9':
            id = {
                name: '9',
                viewName: '9'
            }
            break;
        case '9':
            id = {
                name: '9',
                viewName: '9'
            }
            break;

        case '10':
            id = {
                name: '10',
                viewName: '10'
            }
            break;
        default:
            id = null;
            break;
    }
    return id;
}

/**
 * used for pretty printing the card
 */
Card.prototype.toString = function() {
    return `[ ${this.suite.viewName}  ${this.id.viewName}]`
}



module.exports = Card
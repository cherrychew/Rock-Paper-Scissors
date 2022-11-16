// i dont like this function. i think if this were C i would make an array of [rock, scissors, paper], 
// and then i would plug [randNum] into my array to return a string. it feels silly assigning a number to
// a word like this.

console.log("Please select a play!");


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tieScore = tieScore + 1
        console.log('It\'s a tie!')
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper'
    || playerSelection == 'Rock' && computerSelection == 'Scissors'
    || playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore = playerScore + 1
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    }
    else {
        compScore = compScore + 1
        console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`)
    }
}

function getComputerChoice() {
    let randNum = Math.floor((Math.random() * 3) + 1);
    if (randNum > 2) {
        return 'Rock';
    }
    else if (randNum < 2) {
        return 'Scissors';
    }
    else {
        return 'Paper';
    }
}

function game(playerSelection, computerSelection) {
    playRound(playerSelection, getComputerChoice());
    gamesPlayed = gamesPlayed + 1
    console.log(`Player's Score: ${playerScore} | Computer's Score: ${compScore}`);
    if ((gamesPlayed - tieScore) == 5) {
        if (playerScore > compScore) {
            console.log ("Player is the final winner!")
        } 
        else {
            console.log ("Computer is the final winner!")
        }
    }
}

let gamesPlayed = 0
let playerSelection = null;

let playerScore = 0;
let compScore = 0;
let tieScore = 0;
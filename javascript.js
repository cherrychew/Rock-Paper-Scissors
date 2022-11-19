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
        compHealth.value -= 20; //new bestieee
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    }
    else {
        playerHealth.value -= 20;
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
    if ((gamesPlayed - tieScore) == 5 || playerScore == 3 || compScore == 3)  {
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

let compHealth = document.getElementById("compHealth")
let playerHealth = document.getElementById("playerHealth")

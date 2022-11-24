const textElement = document.querySelector(".text")
var textLinesIndex = [null]
var characters = [];
let textPromptNumber = 1

let playerSelection = null;
let computerSelection = null;

const textLines = [
    { text: "It\'s about time you finally joined me in the throne room. Let me refresh your memory.", id: 1},
    { text: "Against \"The Dark Knight\" choose a weapon effective against his own weapon. When you have chosen correctly five times, you will be dead.", id: 2},
    { text: "However, should \"The Dark Knight\" prevail against you five times; you will have lost. A reset of the webpage should bring you back to where you started.", id: 3},
    { text: "Whilst using the \"weapon triangle\" your axe is effective against a lance, your lance is effective against a sword, and your sword is good against an axe.", id: 4},
    { text: "As you deliberate over your choice of weapon, I sincerely hope you don't let the sword in his appearance influence your decision.", id: 5},
    { text: "Congratulations, he has one health remaining. Surely you can't mess this up.", id: 6},
    { text: "A loss, again. I'm surprised you've let him take so much of your health.", id: 7},
    { text: "... Perhaps you should enlighten me to your strategy. I'm not sure you're taking this very seriously.", id: 8},
    { text: "I'm not surprised. Not just anyone can be Ike. Try again.", id: 9},
    { text: "Well done. I suppose you think you're ready to face against King Ashnard now.", id: 10},
    { text: "Good job. With this, you are ready to fight Ashnard.", id: 11},
    { text: "Pulling through by the skin of your teeth isn't what I call a successful strategy, but well done.", id: 12},
    { text: "A tie. Try picking a different weapon next time.", id: 13},
    { text: "A tie? Again?", id: 14},
    { text: "A tie. You wont be killing him this way.", id: 15},
    { text: "A tie, once again. For the fourth time, in fact.", id: 16},
    { text: `Your ${playerSelection} beats his ${computerSelection}.`, id: 17},
    { text: `${computerSelection} beats ${playerSelection}. Your loss.`, id: 18}
]

let gamesPlayed = 0;

let playerScore = 0;
let compScore = 0;
let tieScore = 0;

let compHealth = document.getElementById("compHealth");
let playerHealth = document.getElementById("playerHealth");

startGame();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tieScore = tieScore + 1
        if (tieScore == 1) {        // make a loop out of the three
            showPrompt(13);
        }
        else if (tieScore == 3) {
            showPrompt(15);
        }
        else if (tieScore == 4){
            showPrompt(16);
        }
        else {
            showPrompt(14);
        }
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper'
    || playerSelection == 'Rock' && computerSelection == 'Scissors'
    || playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore = playerScore + 1
        compHealth.value -= 20; //new bestieee
        if (compHealth.value == 20) {
            showPrompt(6);
        }
        else if (playerHealth.value == 20 || 40 && compHealth.value < 10) { // showed at 40 vs 20??
            showPrompt(12);
        }
        else if (playerHealth.value > 50 && compHealth.value < 10) {
            showPrompt(10);
        }
        else if (playerHealth.value == 100 && compHealth.value < 10) { // this doesnt work, for some reason. goes onto prompt 17.
            showPrompt(11);
        }
        else {
            showPrompt(17);
        }
    }
    else {
        playerHealth.value -= 20;
        compScore = compScore + 1
        if (playerHealth.value == 40) {
            showPrompt(7);
        }
        else if (playerHealth.value == 0) {
            showPrompt(9);
        }
        else if (playerHealth.value == 20 && compHealth.value > 70) { // this prompt showed when player was at 80 health, and then again at 60. and again at 40 vs 40.
            showPrompt(8);
        }
        else {
            showPrompt(18);
        }
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

function revealOneCharacter(list) {
    var next = list.splice(0, 1)[0];
    document.getElementById("soren").src = "resources/mouthopen.png";
    next.span.classList.add("revealed");

    var delay = next.isComma ? 200 : next.isMark ? 800 : next.isPeriod ? 500 : next.isSpace ? 0 : next.delayAfter;

    if (list.length > 0) {
        setTimeout(function() {
            revealOneCharacter(list);
        }, delay)         
    }
    else {
        document.getElementById("soren").src = "resources/mouthclosed.png";
    }
}


function showTextLine(textLinesIndex) {
    const textLine = textLines.find(textLine => textLine.id === textLinesIndex);
    console.log(textLine);

        textLine.text.split("").forEach(character => {
            var span = document.createElement("span");
            span.textContent = character;
            textElement.appendChild(span);
            characters.push({
                span: span,
                isSpace: character === " ",
                isPeriod: character === ".",
                isMark: character === "?",
                isComma: character === ",",
                delayAfter: 40,
                classes: textLine.classes || []
            })
        })
    revealOneCharacter(characters);
}

window.addEventListener('keydown', function(e) {
    if (e.keyCode === 32){
        wasSpacePressed = true;
    }
})

function clearText() {
    textElement.textContent = "";
}

function startGame() {
    showTextLine(1);
}

function nextPrompt() {
    clearText();
    if (textPromptNumber < 5) {
        textPromptNumber += 1;
    }
    else stop
    console.log(textPromptNumber);
    showTextLine(textPromptNumber);
}

function showPrompt(moon) {
    clearText();
    showTextLine(moon)
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

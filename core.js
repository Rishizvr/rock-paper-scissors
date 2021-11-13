// Rishizvr 2021-10-25
// The Odin Project/Foundations/Project: Rock Paper Scissors

let playerScore = 0;
let compScore = 0;

function computerPlay() {
  	let num = Math.floor(Math.random() * 3);
	let compDecision = "";

    switch (num) {
        case 0:
            compDecision = "rock";
            break;
        case 1:
            compDecision = "paper";
            break;
        case 2:
            compDecision = "scissors";
            break;
    }

    return compDecision;
}

function playGame(playerSelection, compDecision) {
    let result = 0;

    console.log(`You: ${playerSelection}`);
    console.log(`Computer: ${compDecision}`);

    if (playerSelection === "rock") {
        switch (compDecision) {
            case "rock":
                console.log("Tie! Rock vs Rock.");
                break;
            case "paper":
                console.log("You Lose! Paper beats rock.");
                result = 1;
                break;
            case "scissors":
                console.log("You Win! Rock beats scissors.");
                result = 2;
                break;
            default:
                console.log("ERROR: Unexpected scenario!");
        }

    } else if (playerSelection === "paper") {
        switch (compDecision) {
            case "rock":
                console.log("You Win! Paper beats rock.");
                result = 2;
                break;
            case "paper":
                console.log("Tie! Paper vs Paper.");
                break;
            case "scissors":
                console.log("You Lose! Scissors beats paper.");
                result = 1;
                break;
            default:
                console.log("ERROR: Unexpected scenario!");
        }

    } else if (playerSelection === "scissors" || playerSelection === "scissor") {
        switch (compDecision) {
            case "rock":
                console.log("You Lose! Rock beats scissors.");
                result = 1;
                break;
            case "paper":
                console.log("You Win! Scissors beats paper.");
                result = 2;
                break;
            case "scissors":
                console.log("Tie! Scissors vs Scissors.");
                break;
            default:
                console.log("ERROR: Unexpected scenario!");
        }

    } else {
        console.log("ERROR: Unexpected scenario!");
    }

    return result;
}

function game() {
    let playerSelection = prompt("Please select: Rock, Paper, or Scissors: ");
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.trim();

    let result = playGame(playerSelection, computerPlay());

    if (result === 1) {
        compScore++;
    } else if (result === 2) {
        playerScore++;
    } 

}

for(let i=0; i<5; i++) {
    game();

}

console.log(`PLAYER: ${playerScore} | COMPUTER: ${compScore}`)

if (playerScore > compScore) {
    console.log("Winner: PLAYER")
} else if (playerScore < compScore) {
    console.log("Winner: COMPUTER")
} else {
    console.log("Winner: TIE")
}
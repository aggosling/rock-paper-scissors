function getComputerChoice() {
    let rand = Math.floor(Math.random() * 100);
    let choice = '';
    if (rand < 34)
        choice = "rock";
    else if (rand >= 34 && rand < 67)
        choice = "paper";
    else if (rand >= 67)
        choice = "scissors";
    return choice;
}

function getHumanChoice() {
    return prompt("Rock, paper or scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice)
        return "Draw! You both chose " + humanChoice;
    const scores = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    };
    if (scores[humanChoice] === computerChoice) {
        ++humanScore;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    else {
        ++computerScore;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log("You: " + humanScore + "\nComputer: " + computerScore);
    }
}

playGame();
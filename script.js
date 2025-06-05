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

const container = document.querySelector("#container");
const resultText = document.querySelector("#result");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        resultText.textContent = playRound(button.id, getComputerChoice());
        playerScoreDiv.textContent = `You: ${humanScore}`
        computerScoreDiv.textContent = `Computer: ${computerScore}`;
        if (humanScore === 5) {
            alert(`Congratulations! You win ${humanScore} : ${computerScore}`);
        }
        if (computerScore === 5) {
            alert(`Unlucky! Computer wins ${computerScore} : ${humanScore}`);
        }
    });
});
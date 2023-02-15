let playerScore = 0;
let computerScore = 0;
let round = 0;
const myArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return myArray[~~(Math.random() * 3)];
}

const resultDisplay = document.getElementById("result");
const fullResultDisplay = document.getElementById("fullResult");
const buttons = document.querySelectorAll("button");
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    resultDisplay.textContent = "that's a tie";
    round++;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    round++;
    resultDisplay.textContent = "you won";
  } else {
    computerScore++;
    round++;
    resultDisplay.textContent = "you lost";
  }

  const playerScoreDisplay = document.getElementById("playerScore");
  playerScoreDisplay.textContent = playerScore;

  const computerScoreDisplay = document.getElementById("computerScore");
  computerScoreDisplay.textContent = computerScore;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    if (round === 5) {
      if (playerScore > computerScore) {
        fullResultDisplay.textContent = "YOU WIN IT ALL!";
      } else if (playerScore === computerScore) {
        fullResultDisplay.textContent = "A Draw eh...";
      } else {
        fullResultDisplay.textContent = "You'll get him next time!";
      }
      playerScore = 0;
      computerScore = 0;
      round = 0;
    }
    if (round===1){
      fullResultDisplay.textContent = ""
    }
  });
});

let playerScore = 0
let computerScore = 0

const myArray = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return myArray[~~(Math.random() * 3)];
  }
const playRound = (playerSelection, computerSelection) =>{
  if (playerSelection === computerSelection) {
    console.log("that's a tie")
}
    else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')){
       playerScore++;
       console.log("you won")
}
    else {
      computerScore++;
      console.log("you lost");
}
}
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("rock, paper or scissors?").toLowerCase();
    playRound(playerSelection, computerSelection)

if (playerScore>computerScore) {
  playerScore=0;
  computerScore=0;
  return "WIN"
}
else if (playerScore ===computerScore){
  playerScore=0;
  computerScore=0;
  return "DRAW"
}
else {
  playerScore=0;
  computerScore=0;
  return "LOSE"
}

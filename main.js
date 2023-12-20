document.addEventListener('DOMContentLoaded', function () {
let computerWon = 0;
let playerWon = 0;
let gameOver = false;
const h2 = document.querySelector("h2");
const p = document.querySelector("p");





  let playRound = playerChoice => {
    if (gameOver === true){
      return; 
    } else {
  
  let computerChoice = Math.floor(Math.random() * 3);     
  
  
  switch (computerChoice){                  
    case 0: 
    computerChoice = "rock";
    break;
    case 1: 
    computerChoice = "paper";
    break;
    case 2: 
    computerChoice = "scissors";
  }
    
    if (playerChoice === "rock" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "rock"){
          
          h2.textContent = `You lost. ${computerChoice} beats ${playerChoice}`;
          computerWon++;
          p.textContent = `You've won ${playerWon} round(s). The computer won ${computerWon} round(s).`;
          

    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
               playerChoice === "paper" && computerChoice === "rock" ||
               playerChoice === "scissors" && computerChoice === "paper" ){
                h2.textContent = `You won. ${playerChoice} beats ${computerChoice}`;
                playerWon++;
                p.textContent = `You've won ${playerWon} round(s). The computer won ${computerWon} round(s).`;

                   
    } else {
      h2.textContent = "It's a draw."
      
    }
  if (computerWon === 5 || playerWon === 5)
    gameOver = true;
    if (computerWon === 5)
      h2.textContent = "You've lost. Better luck next time";
    else if (playerWon === 5)
      h2.textContent = "Congrats, you've won!";
      
  
  }
}
document.querySelector("#rock").addEventListener('click', () => playRound('rock'));
document.querySelector("#paper").addEventListener('click', () => playRound('paper'));
document.querySelector("#scissors").addEventListener('click', () => playRound('scissors'));


  
});



let computerWon = 0;
let playerWon = 0;







let playGame = () => {
  let playRound = () => {           
    let playerChoice = prompt().toLowerCase();
  console.log(`You chose ${playerChoice}`);
  
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
  console.log(`The computer chose ${computerChoice}`)
    
    if (playerChoice === "rock" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "rock"){
          console.log(`You lost. ${computerChoice} beats ${playerChoice}`);
          computerWon++;
          console.log(`You won ${playerWon} rounds. The computer won ${computerWon} rounds.`);
          return computerWon;
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
               playerChoice === "paper" && computerChoice === "rock" ||
               playerChoice === "scissors" && computerChoice === "paper" ){
                console.log(`You won. ${playerChoice} beats ${computerChoice}`);
                playerWon++;
                console.log(`You won ${playerWon} rounds. The computer won ${computerWon} rounds.`);
                return playerWon;
    } else {
      console.log("It's a draw. This round will be repeated");
      playRound();
      
    }
  }
  for (let i =1; i<=5; i++){
    playRound();
  }
  if (playerWon > computerWon){
    console.log("Congrats, you won!");
  } else {
    console.log("Better luck next time!");
  }
};

playGame();
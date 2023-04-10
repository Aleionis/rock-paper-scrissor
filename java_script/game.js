let playerScore = 0;
let computerScore = 0;


function getComputerChoice( computerChoice ) {
    let numChoice = Math.floor(Math.random() * 3 );
    if ( numChoice == 0 ){
        computerChoice = "rock";
    } else if ( numChoice == 1 ){
        computerChoice = "paper";
    } else if ( numChoice == 2 ){
        computerChoice = "scrissor";
    }
    return computerChoice
}

function gameRound (playerSelection, computerSelection){
    let log = "";
if ( playerSelection == "rock" ){
    if ( computerSelection === "paper" ){
        computerScore++;
      log = "You lose!";
    } else if ( computerSelection === "scrissor" ){
        playerScore++;
        log = "You win!";
    } else {
        log = "It's a tie!";
    }
}
if ( playerSelection == "paper" ){
    if ( computerSelection === "scrissor" ){
        computerScore++;
      log = "You lose!";
    } else if ( computerSelection === "rock" ){
        playerScore++;
        log = "You win!";
    } else {
        log = "It's a tie!";
    }
}
if ( playerSelection == "scrissor" ){
    if ( computerSelection === "rock" ){
        computerScore++;
      log = "You lose!";
    } else if ( computerSelection === "paper" ){
        playerScore++;
        log = "You win!";
    } else {
        log = "It's a tie!";
    }
}

return log
}

function scoreWin (){
    if ( playerScore < computerScore ){
    return "You lost!";
    } else if ( playerScore > computerScore ){
        return "You win!";
    } else {
        return "It's a tie";
    }
 }

function game() {
    let i = gameRound
for ( i = 1; i <= 5; i++ ) {
    let playerSelection = prompt("What will you choose: rock, paper, scrissor?");
    let computerSelection = getComputerChoice();
    let result = gameRound(playerSelection, computerSelection );
    console.log( result )
}
let winner = scoreWin();
console.log(`Player score: ${playerScore}`);
console.log(`Computer score: ${computerScore}`);
console.log( winner ); 
}


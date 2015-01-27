//Script for Rock, Paper, Scissors

//User input
var player1 = prompt("Choose Rock, Paper, Scissors");

//Computer choices
var aiChoice = Math.random;

if (aiChoice < 0.36){
  aiChoice = "Paper";

}else if(aiChoice >= 0.68){
  aiChoice = "Rock";

}else{
  aiChoice = "Scissors";
}


//compare results
function compare(playerchoice, aichoice){
  if (playerchoice === aichoice){
    return "It's a tie";
  }else if (playerchoice === "paper"){
    if (aichoice === "rock"){
      return "Player wins";
   }else{
     return "Computer wins";
    }
  }else if (playerchoice === "scissors"){
    if (aichoice === "paper"){
      return "Player wins";
    }else{
      return "Computer wins";
    }
  }else if (playerchoice === "rock"){
    if (aichoice === "scissors"){
      return "Player wins";
    }else{
      return "Computer wins";
    }
  }
}
compare(playerchoice, aiChoice);

//:: Bonus ::

//:: Play Again button::

//:: Score board ::
//create function to keep score
  //if player 1 wins 

  //else computer wins 

  //return outcome

//:: Create AI::
//create function that takes the average used choices and it makes its choices based on most common choice. 


//:: Round Count :: 
function round( array ){

}

//loser & winner page
//if player1 wins link to winner.html
//if aiChoice wins link to loser.html


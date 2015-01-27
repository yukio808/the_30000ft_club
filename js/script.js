//Script for Rock, Paper, Scissors

//User input
var player1 = promt("Choose Rock, Paper, Scissors");

//Computer choices
var aiChoice = Math.random;

if (aiChoice < 0.36){
  aiChoice = "Paper";

}else if(aiChoice >= 0.68){
  aiChoice = "Rock";

}else{
  aiChoice = "Scissors";
}

return aichoice;

//compare results
function compare(choice1, choice2){
  //create if else if else statements
  if (choice1 === choice2){
    return "It's a tie";
  }else if (choice1 === "paper"){
    if (choice2 === "rock"){
      return "paper wins";
    }else{
      return "scissors wins";
    }
  }else if (choice1 === "scissors"){
    if (choice2 === "rock"){
      return "rock wins";
    }else{
      return "paper wins";
    }
  }else if (choice1 === "rock"){
    if (choice2 === "paper"){
      return "paper wins";
    }else{
      return "scissors";
    }
  }
}
//Return response
return compare(player1, aiChoice);

//Return overall outcome

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
  for (var i = 0; i > 0; i++) {
    
}
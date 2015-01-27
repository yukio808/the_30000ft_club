//Script for Rock, Paper, Scissors

//User input
var player1 = prompt("Choose Rock, Paper, Scissors");

function letsPlay(){

  var player = document.getElementById('playerSays');

}

//Computer choices
var aiChoice = Math.random();

//print aiChoice to div
  if (aiChoice < 0.34){
    aiChoice = " paper";

  }else if(aiChoice >= 0.67){
    aiChoice = " rock";

  }else{
    aiChoice = " scissors";
    
  }

var computerOutput = document.getElementById('computer_results').innerHTML = aiChoice;


//compare results
function compare(choice1, choice2){
  //if, else 
  if (choice1 === choice2){
    return " It's a tie";
  }else if (choice1 === "paper"){
    if (choice2 === "rock"){
      return " You Win";
    }else{
      return " Computer Wins";
    }
  }else if (choice1 === "scissors"){
    if (choice2 === "rock"){
      return " Computer Wins";
    }else{
      return " You Win";
    }
  }else if (choice1 === "rock"){
    if (choice2 === "paper"){
      return " Computer Wins";
    }else{
      return " You Win";
    }
  }

}

//Print response to div
var winnerDiv = document.getElementById('game_outcome').innerHTML = compare(player1, aiChoice);

//:: Bonus ::

//:: Play Again button::

//:: Score board ::
//create function to keep score
  //if player 1 wins 

  //else computer wins 

  //return outcome

//:: Create AI that LEARNS ::

//:: Round Count :: 



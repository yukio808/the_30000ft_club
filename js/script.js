//Script for Rock, Paper, Scissors

//User input
function letPlay(){

  var player1 = document.getElementById('playerSays');
  prompt("Choose Rock, Paper, Scissors");

}
//Computer choices
function computer(aiChoice){

  aiChoice = Math.random();

  if (aiChoice < 0.36){
    aiChoice = "Paper";

  }else if(aiChoice >= 0.68){
    aiChoice = "Rock";

  }else{
    aiChoice = "Scissors";
  }
}
//print aiChoice to div
var computerSays = document.getElementById("computer_results");

//compare results
function compare(playerchoice, aichoice){
  if (playerchoice === aichoice){
    return "It's a tie";

  }else if (playerchoice === "paper"){
    if (aichoice === "rock"){
      return "You Win";
    }else{
      return "Computer Wins";
    }
  }else if (playerchoice1 === "scissors"){
    if (aichoice === "rock"){
      return "Computer Wins";
    }else{
      return "You Win";
    }
  }else if (playerchoice1 === "rock"){
    if (aichoice === "paper"){
      return "Computer Wins";
    }else{
      return "You Win";
    }
  }

}
document.getElementById("game_outcome").innerHTML = compare();

//Print response to div
/*compare(player1, aiChoice);*/

//loser & winner page
//if player1 wins link to winner.html

//if aiChoice wins link to loser.html

//:: Bonus ::

//:: Play Again button::

//:: Score board ::
//create function to keep score
  //if player 1 wins 

  //else computer wins 

  //return outcome

//:: Create AI that LEARNS ::

//:: Round Count :: 
/*function score_counter(){
  var comparing = this.compare();
  if(comparing === "You Win"){
    var result = 1;
    document.getElementById("player_score").innerHTML = result;
    
  }else if(comparing === "Computer Wins"){
    var result1 = 1;
    document.getElementById("computer_score").innerHTML = result1;
  }

}
*/
//loser & winner page
//if player1 wins link to winner.html
//if aiChoice wins link to loser.html
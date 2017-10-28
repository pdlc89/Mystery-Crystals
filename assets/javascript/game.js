$(document).ready(function() {

//Declares the global variables to be used
var computerGuess;
var userGuess;
var usersChoice = "";
var userTally = "";
var gamesPlayed;
var gamesWon = "";
var gamesLost = "";
var isStartChosen;
var isCrystalChosen;
var isFirstGameOn = false;
var ifFirstGameOn = true;
var holder;
//clears the form but keeps the tally of wins/loses
  function GameStart() {
	 computerGuess= "";
	 usersChoice = "";
	 userGuess = "";
	 chosenCrystal = false;
	 $("#computer-guess, #user-tally").empty();
	 alert("Please Press: \"Start\"");
  	};

  function gWins() {
  	console.log("win!");
  	gamesWon++;
	$("#wins").text(gamesWon);
	computerGuess= "";
	userGuess = "";
	usersChoice = "";
	isStartChosen = false;
	$("#computer-guess, #user-tally").empty();
	alert("Please press: \"Start\"");
  	};

  	function gameLost() {

  		console.log("Lost");
	  	gamesLost++;
	  	$("#loses").text(gamesLost);
  		computerGuess = "";
  		userGuess = "";
  		usersChoice ="";
  		isStartChosen = false;
  		$("#computerGuess, #user-tally").empty();
  		alert("Please press: \"Start\"");
  	};

	$("#start-button").on("click", function(){
		var numbersArray = [23, 13, 54, 67, 89, 44, 4, 7, 12];
		computerGuess = numbersArray[Math.floor(Math.random()*numbersArray.length)];
		$("#computer-guess").text(computerGuess);
		isStartChosen = true;
		userGuess = 0;
	});
//listen for user click
  $(".crystal").on("click", function(){
  	//check if start is chosen and if it is: store the value given to the image
  		if (isStartChosen) {
  			$("#user-tally").empty();  
			usersChoice = this.value;
			userGuess = parseInt(userGuess);
			usersChoice = parseInt(usersChoice);
			userGuess = userGuess + usersChoice;
			$("#user-tally").text(userGuess);
//checks if the user has exceeded count
			if (userGuess < computerGuess) return;
//checks to see if the user won
  			if (userGuess === computerGuess){
  				$("#user-tally").text("You've Won!!!");
  				 $( "#user-tally" ).animate({
   				 width: "600px",
   				 opacity: 0.5,
   				 marginLeft: "0.6in",
   				 fontSize: "3em",
   				 borderWidth: "10px"
  				}, 800, function(){$(this).removeAttr("style")});
				setTimeout(gWins, 1000);
  			}
// checks to see if te user lost
  			else {
  				$("#user-tally").text("You got too greedy!");
  				$( "#user-tally" ).animate({
   				 width: "600px",
   				 opacity: 0.5,
   				 marginLeft: "0.6in",
   				 fontSize: "3em",
   				 borderWidth: "10px"
  				}, 800, function(){$(this).removeAttr("style")});
	  			setTimeout(gameLost, 1000);
  				}
  		}
  		else {
  			GameStart();
  		}
  });
});


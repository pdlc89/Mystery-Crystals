$(document).ready(function() {

//Declares the global variables to be used
var computerGuess;
var userGuess = "";
var usersChoice = "";
var userTally = "";
var gamesPlayed;
var gamesWon = "";
var gamesLost = "";
var isStartChosen;

  function GameStart() {
	 computerGuess= "";
	 usersChoice = "";
	 userGuess = "";
	 chosenCrystal = false;

	 $("#computer-guess, #user-tally").empty();
	 alert("Please Press: \"Start\"");
  	}

  function GameInProgress() {
	 console.log("IN Progress " + userGuess);
  	}
  function gWins() {
	 computerGuess= "";
	 userGuess = "";
	 usersChoice = "";
	 isStartChosen = false;
	 $("#computer-guess, #user-tally").empty();
	 alert("Please press: \"Start\"");
  	}

  	function gameLost() {
  		computerGuess = "";
  		userGuess = "";
  		usersChoice ="";
  		isStartChosen = false;
  		$("#computerGuess, #user-tally").empty();
  		alert("Please press: \"Start\"");
  	};

	$("#start-button").on("click", function(){
		var numbersArray = [23, 13, 54, 67, 8944, 4, 7, 12];
		computerGuess = numbersArray[Math.floor(Math.random()*numbersArray.length)];
		$("#computer-guess").text(computerGuess);
		isStartChosen = true;
		userGuess = 0;
	});

  
  $(".crystal").on("click", function(){
  		if (isStartChosen) {  
			usersChoice += this.value;
			isCrystalChosen = true
			$("#user-tally").empty();	
	  		if (isCrystalChosen){
				usersChoice = parseInt(usersChoice);
				userGuess = parseInt(userGuess);
				userGuess += usersChoice;
				$("#user-tally").text(userGuess);
				GameInProgress();
			}
			if (userGuess <computerGuess) return;
  			if (userGuess === computerGuess){
	  			gamesWon++;
				$("#user-tally").text("You've Won!!!");
				$("#wins").text(gamesWon);
				setTimeout(gWins, 1000);
				console.log("wins");
  			}
  			if (userGuess > computerGuess) {
  				console.log("Lost");
	  			gamesLost++;
	  			$("#user-tally").text("You got to greedy!");
	  			$("#loses").text(gamesLost);
	  			setTimeout(gameLost, 1000);
  				}
  		}
  		else {
  			GameStart();
  		}
  });
});


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
	 gamesWon = 0;
	 gamesLost = 0;
	 chosenCrystal = false;

	 $("#computer-guess, #user-tally").empty();
	 alert("Please Press: \"Start\"");
  	}

  function GameInProgress() {
	 computerGuess= "";
	 userGuess = "";
	 holder = "";
	 isStartChosen = false;

	 $("#computer-guess, #user-tally").empty();
	 alert("Please Press: \"Start\"");
  	}

	$("#start-button").on("click", function(){
		var numbersArray = [23, 13, 54, 67, 8944, 4, 7, 12];
		computerGuess = numbersArray[Math.floor(Math.random()*numbersArray.length)];
		console.log(computerGuess);
		$("#computer-guess").text(computerGuess);
		isStartChosen = true;
		userGuess = 0;
	});

  
  $(".crystal").on("click", function(){
  		if (isStartChosen) {  
			usersChoice += this.value;
			isCrystalChosen = true

	  		if (isCrystalChosen){
				usersChoice = parseInt(usersChoice);
				userGuess = parseInt(userGuess);
				userGuess = userGuess + usersChoice;
				$("#user-tally").text(userGuess);
			}
			if (userGuess <computerGuess) return;

  			if (userGuess === computerGuess){
	  			gamesWon++;
				$("#user-tally").text("You've Won!!!");
				$("#wins").text(gamesWon);
				setTimeout(GameInProgress, 1000);
  			}
  			if (userGuess > computerGuess) {
	  			gamesLost++;
	  			$("#user-tally").text("You got to greedy!");
	  			$("#loses").text(gamesLost);
	  			setTimeout(GameStart, 1000);
  				}
  		}
  		else {
  			GameStart();
  		}
  });
});


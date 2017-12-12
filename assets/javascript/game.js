
$( document ).ready(function() {
//starting character stats

var rey = {
	name: "rey",
	HP: 125,
	attack: 13,
	counterAttack: 16,
	//win if battle kylo or finn first, lose if battle bb8 first
	}
var kylo = {
	name: "kylo",
	HP: 140,
	attack: 12,
	counterAttack: 11,
	//win if battle finn first, lose if battle bb8 or rey first
}
var finn = {
	name: "finn",
	HP: 130,
	attack: 12,
	counterAttack: 14,
	//win if battle kylo first, lose if battle bb8 or rey first
}
var bb8 = {
	name: "bb8",
	HP: 105,
	attack: 14,
	counterAttack: 20,
	//lose if battle rey first, win if battle kylo or finn first
}

//initialize variables
//counts number of attack turns
var turnCounter = 1;
//sets one of the characters to myCharacter from list above
var myCharacter;
//sets chosen opponent from list above
var myOpponent;
//for updating my character's attack stat
var newAttack;
//determines if opponent is currently chosen or not
var opponentChosen = false;
//counts the number of opponents defeated
var opponentCounter = 0;

//choosing your character and the defenders - this moves the correct image to the correct location
$("#rey").on("click", function () {
	$("#myOpponent").text("");
	//if rey is in the top character list, meaning no character has been chosen
	if($("#rey").parents("#characterList").length == 1) {
		//clears text from divs in case player has chosen "attack" before picking a character
		$("#myCharacter").text("");
		//moves the rey character div from the character list div to the my character div
		$("#rey").detach().appendTo("#myCharacter");
		//moves the rest of the character divs to the opponent list div
		$("#kylo").detach().appendTo("#opponentList");
		$("#finn").detach().appendTo("#opponentList");
		$("#bb8").detach().appendTo("#opponentList");
		//changes other character div's class to "opponent"
		$("#bb8").addClass("opponent");
		$("#finn").addClass("opponent");
		$("#kylo").addClass("opponent");
		//sets rey equal to my character
		myCharacter = rey;
		//sets up rey's health screen
		$("#reyHealth").addClass("myHealth");
		//prompts player to choose an opponent from the new opponent list
		$("#holdOpponentList").text("Now, click on one of the characters below to battle them.");
	}

	//if character has already selected a player, meaning rey is in the opponent list
	if($("#rey").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		//clears the my opponent div and moves rey's character div to the my opponent list
		$("#holdOpponentList").text("");
		//move the rey div to the defender div
		$("#rey").detach().appendTo("#myOpponent");
		//sets rey to my opponent
		myOpponent = rey;
		//acknowledges player has chosen opponent
		opponentChosen = true;
		$("#reyHealth").addClass("opponentHealth");
		$("#fightText").append("Now click the button to attack your opponent!")
	}
})

//does the same as above if kylo is clicked
$("#kylo").on("click", function () {
	$("#myOpponent").text("");

	if($("#kylo").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#rey").detach().appendTo("#opponentList");
		$("#kylo").detach().appendTo("#myCharacter");
		$("#finn").detach().appendTo("#opponentList");
		$("#bb8").detach().appendTo("#opponentList");
		$("#bb8").addClass("opponent");
		$("#finn").addClass("opponent");
		$("#rey").addClass("opponent");
		myCharacter = kylo;
		$("#kyloHealth").addClass("myHealth");
		$("#holdOpponentList").text("Now, click on one of the characters below to battle them.");
	}

	if($("#kylo").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#holdOpponentList").text("");
		$("#kylo").detach().appendTo("#myOpponent");
		myOpponent = kylo;
		opponentChosen = true;
		$("#kyloHealth").addClass("opponentHealth");
		$("#fightText").append("Now click the button to attack your opponent!")
	}
})

//does the same as above if finn is clicked
$("#finn").on("click", function () {
	$("#myOpponent").text("");

	if($("#finn").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#rey").detach().appendTo("#opponentList");
		$("#kylo").detach().appendTo("#opponentList");
		$("#finn").detach().appendTo("#myCharacter");
		$("#bb8").detach().appendTo("#opponentList");
		$("#bb8").addClass("opponent");
		$("#kylo").addClass("opponent");
		$("#rey").addClass("opponent");
		myCharacter = finn;
		$("#finnHealth").addClass("myHealth");
		$("#holdOpponentList").text("Now, click on one of the characters below to battle them.");
	}

	if($("#finn").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#holdOpponentList").text("");
		$("#finn").detach().appendTo("#myOpponent");
		myOpponent = finn;
		opponentChosen = true;
		$("#finnHealth").addClass("opponentHealth");
		$("#fightText").append("Now click the button to attack your opponent!")
	}
})

//does the same as above if bb8 is clicked
$("#bb8").on("click", function () {
	$("#myOpponent").text("");

	if($("#bb8").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#rey").detach().appendTo("#opponentList");
		$("#kylo").detach().appendTo("#opponentList");
		$("#finn").detach().appendTo("#opponentList");
		$("#bb8").detach().appendTo("#myCharacter");
		$("#kylo").addClass("opponent");
		$("#finn").addClass("opponent");
		$("#rey").addClass("opponent");
		myCharacter = bb8;
		$("#bb8Health").addClass("myHealth");
		$("#holdOpponentList").text("Now, click on one of the characters below to battle them.");
	}

	if($("#bb8").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#holdOpponentList").text("");
		$("#bb8").detach().appendTo("#myOpponent");
		myOpponent = bb8;
		opponentChosen = true;
		$("#bb8Health").addClass("opponentHealth");
		$("#fightText").append("Now click the button to attack your opponent!")
	}
})

//if attack button is clicked
$(".attack").on("click", function () {
	//prompts character to pick a character and opponent if they have not
	if($("#myOpponent").children().length == 0) {
		$("#fightText").prepend("Please pick a character and an opponent to begin.<br>");
	}

	//runs attack function if opponent is chosen
	if(opponentChosen === true) {
		attackFunction(myCharacter, myOpponent);
	}	
})

function attackFunction(myCharacter, myOpponent) {
	//both characters have HP remaining
	if (myCharacter.HP > 0 && myOpponent.HP > 0) {
		//update character stats
		newAttack = myCharacter.attack * turnCounter;
		myCharacter.HP = myCharacter.HP - myOpponent.counterAttack;
		myOpponent.HP = myOpponent.HP - newAttack;
		//append new stats and damage done to screen
		$("#fightText").prepend(myCharacter.name + " did " + newAttack + " points of damage.  " + myOpponent.name + " did " + myOpponent.counterAttack + " points of damage.<br>");
		$(".myHealth").text("HP: " + myCharacter.HP);
		$(".opponentHealth").text("HP: " + myOpponent.HP);
		turnCounter++;
	}

	//if my character has HP remaining and all opponents are defeated, alerts user and ends game
	if (myCharacter.HP > 0 && myOpponent.HP <= 0 && opponentCounter == 2) {
		$("#fightText").prepend("Congrats! You have defeated all of your foes. Refresh the page to play again.<br>");
		$("#myOpponent").text("");
		return
	}

	//if my character has HP remaning and there are more opponents to defeat
	if (myCharacter.HP > 0 && myOpponent.HP <= 0) {
		//alerts user and clears defender screen
		$("#fightText").prepend("You win! Choose another opponent to continue the battle.<br>");
		$("#myOpponent").text("");
		opponentCounter++;
		//determines opponent is no longer chosen
		opponentChosen = false;
		return
	}

	//if my character has no health remaing, alerts user and ends game
	if (myCharacter.HP <= 0) {
		$("#fightText").prepend("You lose! Refresh the page to play again.<br>");
		opponentChosen = false;
		return
	}
}

});


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
		counterAttack: 10,
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
		counterAttack: 18,
		//lose if battle rey first, win if battle kylo or finn first
	}

var turnCounter = 1;
var myCharacter;
var myOpponent;
var newAttack;
var opponentChosen = false;
var opponentCounter = 0;

//choosing your character and the defenders - this moves the correct image to the correct location
$("#rey").on("click", function () {
	if($("#rey").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#myOpponent").text("");
		$("#rey").detach().appendTo("#myCharacter");
		$("#kylo").detach().appendTo("#opponentList");
		$("#finn").detach().appendTo("#opponentList");
		$("#bb8").detach().appendTo("#opponentList");
		$("#bb8").addClass("opponent");
		$("#finn").addClass("opponent");
		$("#kylo").addClass("opponent");
		myCharacter = rey;
		$("#myHealth").text("HP: " + myCharacter.HP);
		$("#myHealth").addClass("character");
		$("#holdOpponentList").text("Now, click on one of the characters below to battle them.");
	}

	if($("#rey").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#rey").detach().appendTo("#myOpponent");
		myOpponent = rey;
		opponentChosen = true;
		$("#opponentHealth").text("HP: " + myOpponent.HP);
		$("#opponentHealth").addClass("character");
		$("#holdOpponentList").text("");
	}
})

$("#kylo").on("click", function () {
	if($("#kylo").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#myOpponent").text("");
		$("#rey").detach().appendTo("#opponentList");
		$("#kylo").detach().appendTo("#myCharacter");
		$("#finn").detach().appendTo("#opponentList");
		$("#bb8").detach().appendTo("#opponentList");
		$("#bb8").addClass("opponent");
		$("#finn").addClass("opponent");
		$("#rey").addClass("opponent");
		myCharacter = kylo;
		$("#myHealth").text("HP: " + myCharacter.HP);
		$("#myHealth").addClass("character");
		$("#holdOpponentList").text("Now, click on one of the characters below to battle them.");
	}

	if($("#kylo").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#kylo").detach().appendTo("#myOpponent");
		myOpponent = kylo;
		opponentChosen = true;
		$("#opponentHealth").text("HP: " + myOpponent.HP);
		$("#opponentHealth").addClass("character");
		$("#holdOpponentList").text("");
	}
})

$("#finn").on("click", function () {
	if($("#finn").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#myOpponent").text("");
		$("#rey").detach().appendTo("#opponentList");
		$("#kylo").detach().appendTo("#opponentList");
		$("#finn").detach().appendTo("#myCharacter");
		$("#bb8").detach().appendTo("#opponentList");
		$("#bb8").addClass("opponent");
		$("#kylo").addClass("opponent");
		$("#rey").addClass("opponent");
		myCharacter = finn;
		$("#myHealth").text("HP: " + myCharacter.HP);
		$("#myHealth").addClass("character");
		$("#holdOpponentList").text("Now, click on one of the characters below to battle them.");
	}

	if($("#finn").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#finn").detach().appendTo("#myOpponent");
		myOpponent = finn;
		opponentChosen = true;
		$("#opponentHealth").text("HP: " + myOpponent.HP);
		$("#opponentHealth").addClass("character");
		$("#holdOpponentList").text("");
	}
})

$("#bb8").on("click", function () {
	if($("#bb8").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#myOpponent").text("");
		$("#rey").detach().appendTo("#opponentList");
		$("#kylo").detach().appendTo("#opponentList");
		$("#finn").detach().appendTo("#opponentList");
		$("#bb8").detach().appendTo("#myCharacter");
		$("#kylo").addClass("opponent");
		$("#finn").addClass("opponent");
		$("#rey").addClass("opponent");
		myCharacter = bb8;
		$("#myHealth").text("HP: " + myCharacter.HP);
		$("#myHealth").addClass("character");
		$("#holdOpponentList").text("Now, click on one of the characters below to battle them.");
	}

	if($("#bb8").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#bb8").detach().appendTo("#myOpponent");
		myOpponent = bb8;
		opponentChosen = true;
		$("#opponentHealth").text("HP: " + myOpponent.HP);
		$("#opponentHealth").addClass("character");
		$("#holdOpponentList").text("");
	}
})

$(".attack").on("click", function () {
	if($("#myOpponent").children().length == 0) {
		$("#fightText").prepend("Please pick a character and an opponent to begin.<br>");
	}

	if(opponentChosen === true) {
		attackFunction(myCharacter, myOpponent);
		console.log(opponentCounter);
	}	
})

function attackFunction(myCharacter, myOpponent) {
	if (myCharacter.HP > 0 && myOpponent.HP > 0) {
		newAttack = myCharacter.attack * turnCounter;
		myCharacter.HP = myCharacter.HP - myOpponent.counterAttack;
		myOpponent.HP = myOpponent.HP - newAttack;
		$("#fightText").prepend(myCharacter.name + " did " + newAttack + " points of damage.  " + myOpponent.name + " did " + myOpponent.counterAttack + " points of damage.<br>");
		$("#myHealth").text("HP: " + myCharacter.HP);
		$("#opponentHealth").text("HP: " + myOpponent.HP);
		turnCounter++;
	}

	if (myCharacter.HP > 0 && myOpponent.HP <= 0 && opponentCounter == 2) {
		$("#fightText").prepend("Congrats! You have defeated all of your foes. Refresh the page to play again.<br>");
		$("#myOpponent").text("");
		$("#opponentHealth").text("");
		$("#opponentHealth").removeClass("character");
		return
	}

	if (myCharacter.HP > 0 && myOpponent.HP <= 0) {
		$("#fightText").prepend("You win! Choose another opponent to continue the battle.<br>");
		$("#myOpponent").text("");
		$("#opponentHealth").text("");
		$("#opponentHealth").removeClass("character");
		opponentCounter++;
		opponentChosen = false;
		return
	}

	if (myCharacter.HP <= 0) {
		$("#fightText").prepend("You lose! Refresh the page to play again.<br>");
		opponentChosen = false;
		return
	}
}



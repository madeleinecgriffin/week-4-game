//starting character stats

	var ray = {
		name: "ray",
		HP: 125,
		attack: 13,
		counterAttack: 15,
	}
	var kylo = {
		name: "kylo",
		HP: 140,
		attack: 11,
		counterAttack: 11,
	}
	var finn = {
		name: "finn",
		HP: 130,
		attack: 12,
		counterAttack: 16,
	}
	var bb8 = {
		name: "bb8",
		HP: 110,
		attack: 14,
		counterAttack: 18,
	}

var turnCounter = 1;
var myCharacter;
var myOpponent;
var newAttack;
var opponentChosen = false;

//choosing your character and the defenders - this moves the correct image to the correct location
$("#ray").on("click", function () {
	if($("#ray").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#myOpponent").text("");
		$("#ray").detach().appendTo("#myCharacter");
		$("#kylo").detach().appendTo("#opponentList");
		$("#finn").detach().appendTo("#opponentList");
		$("#bb8").detach().appendTo("#opponentList");
		myCharacter = ray;
		$("#myHealth").text(myCharacter.HP);
		$("#myHealth").addClass("character");
	}

	if($("#ray").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#ray").detach().appendTo("#myOpponent");
		myOpponent = ray;
		opponentChosen = true;
		$("#opponentHealth").text(myOpponent.HP);
		$("#opponentHealth").addClass("character");
	}
})

$("#kylo").on("click", function () {
	if($("#kylo").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#myOpponent").text("");
		$("#ray").detach().appendTo("#opponentList");
		$("#kylo").detach().appendTo("#myCharacter");
		$("#finn").detach().appendTo("#opponentList");
		$("#bb8").detach().appendTo("#opponentList");
		myCharacter = kylo;
		$("#myHealth").text(myCharacter.HP);
		$("#myHealth").addClass("character");
	}

	if($("#kylo").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#kylo").detach().appendTo("#myOpponent");
		myOpponent = kylo;
		opponentChosen = true;
		$("#opponentHealth").text(myOpponent.HP);
		$("#opponentHealth").addClass("character");
	}
})

$("#finn").on("click", function () {
	if($("#finn").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#myOpponent").text("");
		$("#ray").detach().appendTo("#opponentList");
		$("#kylo").detach().appendTo("#opponentList");
		$("#finn").detach().appendTo("#myCharacter");
		$("#bb8").detach().appendTo("#opponentList");
		myCharacter = finn;
		$("#myHealth").text(myCharacter.HP);
		$("#myHealth").addClass("character");
	}

	if($("#finn").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#finn").detach().appendTo("#myOpponent");
		myOpponent = finn;
		opponentChosen = true;
		$("#opponentHealth").text(myOpponent.HP);
		$("#opponentHealth").addClass("character");
	}
})

$("#bb8").on("click", function () {
	if($("#bb8").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#myOpponent").text("");
		$("#ray").detach().appendTo("#opponentList");
		$("#kylo").detach().appendTo("#opponentList");
		$("#finn").detach().appendTo("#opponentList");
		$("#bb8").detach().appendTo("#myCharacter");
		myCharacter = bb8;
		$("#myHealth").text(myCharacter.HP);
		$("#myHealth").addClass("character");
	}

	if($("#bb8").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#bb8").detach().appendTo("#myOpponent");
		myOpponent = bb8;
		opponentChosen = true;
		$("#opponentHealth").text(myOpponent.HP);
		$("#opponentHealth").addClass("character");
	}
})

$(".attack").on("click", function () {
	if($("#myCharacter").children().length == 0) {
		$("#myCharacter").text("Please pick a character.");
	}

	if($("#myOpponent").children().length == 0 && $("#myCharacter").children().length == 1) {
		$("#myOpponent").text("Please pick an opponent.");
	}

	if(opponentChosen === true) {
		attackFunction(myCharacter, myOpponent);
	}	
})

function attackFunction(myCharacter, myOpponent) {
	if (myCharacter.HP > 0 && myOpponent.HP > 0) {
		newAttack = myCharacter.attack * turnCounter;
		myCharacter.HP = myCharacter.HP - myOpponent.counterAttack;
		myOpponent.HP = myOpponent.HP - newAttack;
		$("#fightText").prepend(myCharacter.name + " did " + newAttack + " points of damage.  " + myOpponent.name + " did " + myOpponent.counterAttack + " points of damage.<br>");
		$("#myHealth").text(myCharacter.HP);
		$("#opponentHealth").text(myOpponent.HP);
		turnCounter++;
	}

	if (myCharacter.HP > 0 && myOpponent.HP <= 0 && $("#opponentList").children().length == 0) {
		$("#fightText").prepend("You win! All enemies defeated.<br>");
		$("#myOpponent").text("");
		$("#opponentHealth").text("");
		$("#opponentHealth").removeClass("character");
		opponentChosen = false;
	}

	if (myCharacter.HP > 0 && myOpponent.HP <= 0) {
		$("#fightText").prepend("You win! Choose another opponent to continue the battle.<br>");
		$("#myOpponent").text("");
		$("#opponentHealth").text("");
		$("#opponentHealth").removeClass("character");
		opponentChosen = false;
	}

	if (myCharacter.HP <= 0 && myOpponent.HP > 0) {
		$("#fightText").prepend("You lose! Refresh the page to play again.<br>");
		opponentChosen = false;
		return
	}

	if (myCharacter.HP <= 0 && myOpponent.HP <= 0) {
		$("#fightText").prepend("You lose! Refresh the page to play again.<br>");
		opponentChosen = false;
		return
	}
}



$("#ray").on("click", function () {
	if($("#ray").parents("#characterList").length == 1) {
		$("#myCharacter").text("");
		$("#myOpponent").text("");
		$("#ray").detach().appendTo("#myCharacter");
		$("#kylo").detach().appendTo("#opponentList");
		$("#finn").detach().appendTo("#opponentList");
		$("#bb8").detach().appendTo("#opponentList");
	}

	if($("#ray").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#ray").detach().appendTo("#myOpponent");
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
	}

	if($("#kylo").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#kylo").detach().appendTo("#myOpponent");
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
	}

	if($("#finn").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#finn").detach().appendTo("#myOpponent");
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
	}

	if($("#bb8").parents("#opponentList").length == 1 && $("#myOpponent").children().length == 0) {
		$("#myOpponent").text("");
		$("#bb8").detach().appendTo("#myOpponent");
	}
})

$(".attack").on("click", function () {
	if($("#myCharacter").children().length == 0) {
		$("#myCharacter").text("Please pick a character.");
	}

	if($("#myOpponent").children().length == 0 && $("#myCharacter").children().length == 1) {
		$("#myOpponent").text("Please pick an opponent.");
	}
})



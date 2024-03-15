const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let cpuChoice = "";
let userChoice = "";

let cpuScore = 0;
let userScore = 0;

function getComputerChoice() {
	let choiceRng = Math.floor(Math.random() * 3) + 1;

	switch (choiceRng) {
		case 1:
			return rock;
		case 2:
			return paper;
		case 3:
			return scissors;
		default:
			console.warn("choiceRng is an unexpected value! returning 'Rock'");
			return rock;
	}
}

function getUserChoice() {
	let choice = prompt("Rock, Paper, or Scissors?").toLowerCase().trim();

	return choice;
}

function lose() {
	alert("You lose! " + cpuChoice + " beats " + userChoice + "!");
	cpuScore++;
}

function win() {
	alert("You win! " + userChoice + " beats " + cpuChoice + "!");
	userScore++;
}

function tie() {
	alert("It's a tie!");
}

function playRound() {
	userChoice = getUserChoice();

	cpuChoice = getComputerChoice();

	console.log("CPU: " + cpuChoice);
	console.log("USER: " + userChoice);

	if (userChoice == cpuChoice) tie();
	else if (userChoice == rock) {
		if (cpuChoice == scissors) win();
		else if (cpuChoice == paper) lose();
	} else if (userChoice == paper) {
		if (cpuChoice == rock) win();
		else if (cpuChoice == scissors) lose();
	} else if (userChoice == scissors) {
		if (cpuChoice == paper) win();
		else if (cpuChoice == rock) lose();
	} else {
		alert("Incorrect Input!");
	}
}

function playGame(rounds = 3) {
	console.log("Starting Game");
	for (let i = 1; i <= rounds; i++) {
		console.log("Round #" + i.toString());
		playRound();
	}

	if (cpuScore > userScore) {
		console.log("YOU LOSE.");
	} else if (userScore > cpuScore) {
		console.log("YOU WIN!");
	} else if (userScore == cpuScore) {
		console.log("YOU TIED.");
	}
	console.log(`YOUR SCORE: ${userScore} - CPU SCORE: ${cpuScore}`);
}

playGame(3);

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let cpuChoice = "";
let userChoice = "";

let cpuScore = 0;
let userScore = 0;

const roundResultText = document.querySelector("#round-result");
const roundChoicesText = document.querySelector("#round-choices");
const roundScoreText = document.querySelector("#round-score");

function getComputerChoice() {
	let choiceRng = Math.floor(Math.random() * 3) + 1;

	switch (choiceRng) {
		case 1:
			return ROCK;
		case 2:
			return PAPER;
		case 3:
			return SCISSORS;
		default:
			console.warn("choiceRng is an unexpected value! returning 'Rock'");
			return ROCK;
	}
}

function getUserChoice() {
	let choice = prompt("Rock, Paper, or Scissors?").toLowerCase().trim();

	return choice;
}

function lose() {
	roundResultText.textContent =
		"You lose! " + cpuChoice + " beats " + userChoice + "!";
	cpuScore++;
}

function win() {
	roundResultText.textContent =
		"You win! " + userChoice + " beats " + cpuChoice + "!";
	userScore++;
}

function tie() {
	roundResultText.textContent = "It's a tie!";
}

function playRound() {
	// * this is only for cli app, and is deprecated.
	// userChoice = getUserChoice();

	cpuChoice = getComputerChoice();

	roundChoicesText.textContent =
		"YOUR CHOICE: " +
		choiceAsEmoji(userChoice) +
		" | " +
		"CPU: " +
		choiceAsEmoji(cpuChoice);

	if (userChoice == cpuChoice) tie();
	else if (userChoice == ROCK) {
		if (cpuChoice == SCISSORS) win();
		else if (cpuChoice == PAPER) lose();
	} else if (userChoice == PAPER) {
		if (cpuChoice == ROCK) win();
		else if (cpuChoice == SCISSORS) lose();
	} else if (userChoice == SCISSORS) {
		if (cpuChoice == PAPER) win();
		else if (cpuChoice == ROCK) lose();
	} else {
		console.error(
			"I have no idea what you did, but you managed to submit an incorrect choice, well done."
		);
	}

	roundScoreText.textContent =
		"YOUR SCORE: " + userScore + " vs " + "CPU SCORE: " + cpuScore;
}

// * Deprecated Code for testing cli
/* function playGame(rounds = 3) {
	console.log("Starting Game");
	for (let i = 1; i <= rounds; i++) {
		console.log("Round #" + i.toString());
		playRound();
	}

	if (cpuScore > userScore) {
		alert("YOU LOSE!");
	} else if (userScore > cpuScore) {
		alert("YOU WIN!");
	} else if (userScore == cpuScore) {
		alert( "YOU TIED.");
	}
	console.log(`YOUR SCORE: ${userScore} - CPU SCORE: ${cpuScore}`);
} */

// * Converts one of the three choices to it's corresponding emoji.
function choiceAsEmoji(str) {
	switch (str) {
		case ROCK:
			return "🪨";
		case PAPER:
			return "📄";
		case SCISSORS:
			return "✂️";
		default:
			console.error(
				"Unexpected input in choiceAsEmoji func, str = " + str
			);
			return "NULL";
	}
}

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener("click", (_) => {
	userChoice = ROCK;
	playRound();
});

paperBtn.addEventListener("click", (_) => {
	userChoice = PAPER;
	playRound();
});

scissorsBtn.addEventListener("click", (_) => {
	userChoice = SCISSORS;
	playRound();
});

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let cpuChoice = "";
let userChoice = "";

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
}

function win() {
	alert("You win! " + userChoice + " beats " + cpuChoice + "!");
}

userChoice = getUserChoice();

cpuChoice = getComputerChoice();

console.log("CPU: " + cpuChoice);
console.log("USER: " + userChoice);

if (userChoice == cpuChoice) alert("It's a tie!");
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

function getComputerChoice() {
  let choiceRng = Math.floor(Math.random() * 3) + 1;

  switch (choiceRng) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      console.warn("choiceRng is an unexpected value! returning 'Rock'");
      return "rock";
  }
}

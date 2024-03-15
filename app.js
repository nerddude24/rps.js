function getComputerChoice() {
  let choiceRng = Math.floor(Math.random() * 3) + 1;

  switch (choiceRng) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      console.warn("choiceRng is an unexpected value! returning 'Rock'");
      return "Rock";
  }
}

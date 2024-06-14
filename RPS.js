function computerPlay() {
  const options = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * options.length);

  return options[randomIndex];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "You Win!";
  } else {
    return "Computer Win!";
  }
}
function updateGame(playerSelection, computerSelection, result) {
  const gameDiv = document.getElementById("game");
  const resultDiv = document.getElementById("result");

  gameDiv.style.display = "none";
  resultDiv.innerHTML = `You chose: ${playerSelection}, Computer chose: ${computerSelection}. ${result}`;

  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Play again";
  playAgainButton.addEventListener("click", () => {
    gameDiv.style.display = "block";
    resultDiv.innerHTML = "";
  });
  resultDiv.appendChild(playAgainButton);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateGame(playerSelection, computerSelection, result);
  });
});

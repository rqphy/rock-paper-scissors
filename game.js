const buttons = document.querySelectorAll(".game__button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    game(button);
  });
});

function game(button) {
  const player = button.innerHTML;
  const robot = robotPlay();
  const result = checkResult(player, robot);
  displayResult({ player, robot, result });
}

function robotPlay() {
  return buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
}

function checkResult(player, robot) {
  if (player === robot) return "Draw";
  else if (
    (player === "Rock" && robot === "Scissors") ||
    (player === "Scissors" && robot === "Paper") ||
    (player === "Paper" && robot === "Rock")
  )
    return "Player's win";
  else return "Robot's win";
}

function displayResult({ player, robot, result }) {
  const container = document.querySelector(".result");
  container.innerHTML = `
    Player : ${player} </br>
    Robot : ${robot} </br>
    Result : ${result}
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  const resetButton = document.getElementById("reset");

  resetButton.addEventListener("click", function () {
    const cells = document.querySelectorAll("td");
    cells.forEach((cell) => {
      cell.innerText = "";
    });
    const boardContainer = document.getElementById("board-container");
    const lines = document.querySelectorAll(".line");
    lines.forEach((line) => {
      boardContainer.removeChild(line);
    });
    player = "X";
    gameOver = false;
  });
});

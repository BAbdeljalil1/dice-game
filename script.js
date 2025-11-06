const dice1El = document.getElementById("dice_1");
const dice2El = document.getElementById("dice_2");

const playBtnEl = document.getElementById("playBtn");

playBtnEl.addEventListener("click", function () {
  function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }

  dice1El.textContent = randomNumber();
  dice2El.textContent = randomNumber();
});

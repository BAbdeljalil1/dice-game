const dice1El = document.getElementById("dice_1");
const dice2El = document.getElementById("dice_2");

const lessThanRadioInput = document.getElementById("less");
const equalThanRadioInput = document.getElementById("equal");
const greaterThanRadioInput = document.getElementById("greater");

equalThanRadioInput.checked = true;

const playBtnEl = document.getElementById("playBtn");

const resultEl = document.getElementById("result");

let dice1Value, dice2Value, totalNumberOfDices;

playBtnEl.addEventListener("click", function () {
  function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  dice1Value = randomNumber();
  dice2Value = randomNumber();

  dice1El.textContent = dice1Value;
  dice2El.textContent = dice2Value;

  totalNumberOfDices = dice1Value + dice2Value;

  if (lessThanRadioInput.checked) {
    resultEl.textContent = totalNumberOfDices < 7 ? "WIN 👏🏻" : "LOSE 😞";
  } else if (greaterThanRadioInput.checked) {
    resultEl.textContent = totalNumberOfDices > 7 ? "WIN 👏🏻" : "LOSE 😞";
  } else if (equalThanRadioInput.checked) {
    resultEl.textContent = totalNumberOfDices === 7 ? "WIN 👏🏻" : "LOSE 😞";
  }
});

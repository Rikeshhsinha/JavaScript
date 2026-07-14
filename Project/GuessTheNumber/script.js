let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lowOrHi = document.querySelector(".lowOrHi");
const remainingChance = document.querySelector(".lastResult");
const startOver = document.querySelector(".newGame");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (!playGame) return;
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a  number greater than 1.");
  } else if (guess > 100) {
    alert("please enter a number less than 100.");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right 🎉`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else {
    displayMessage("Number is Too High");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remainingChance.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");

  const p = document.createElement("p");

  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");

  newGameButton.addEventListener("click", function () {
    randomNumber = parseInt(Math.random() * 100 + 1);

    prevGuess = [];

    numGuess = 1;

    guessSlot.innerHTML = "";

    remainingChance.innerHTML = "10";

    lowOrHi.innerHTML = "";

    userInput.removeAttribute("disabled");

    startOver.removeChild(document.querySelector(".button"));

    playGame = true;
  });
}

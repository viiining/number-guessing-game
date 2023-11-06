let attempts = 0
let randomNumber = Math.floor(Math.random() * 100)
let firstNumber = 0
let lastNumber = 100

const guess = document.getElementById("guess")
const btn = document.getElementById("btn")
const hint = document.getElementById("hint")
const attemptsCounter = document.getElementById("attempts")

btn.addEventListener("click", checkGuessValue)
guess.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});
function checkGuessValue() {
  const guessValue = Number(guess.value);
  if (isNaN(guessValue) || guessValue < 0 || guessValue > 100) {
    hint.textContent = "Please enter a valid guess between 0 and 100.";
    hint.style.backgroundColor = "#fe9e95";
    return;
  }
  attempts++;

  if (guessValue === randomNumber) {
    hint.textContent = "Congratulations, you got it!";
    hint.style.backgroundColor = "#419bf6";
  } else if (guessValue < randomNumber) {
    firstNumber = guessValue;
    hint.textContent = `Guess between ${firstNumber} and ${lastNumber}`;
    hint.style.backgroundColor = "#fe9e95";
  } else {
    lastNumber = guessValue;
    hint.textContent = `Guess between ${firstNumber} and ${lastNumber}`;
    hint.style.backgroundColor = "#fe9e95";
  }
  
  attemptsCounter.textContent = `Attempts: ${attempts}`; 
}
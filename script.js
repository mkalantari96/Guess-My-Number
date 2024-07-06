"use strict";
// document.querySelector(".message").textContent = 13;
// document.querySelector(".score").textContent = 9;
// console.log(document.querySelector(".guess").nodeValue);
// document.querySelector(".guess").value = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  const inputValueGuess = Number(document.querySelector(".guess").value);
  if (score) {
    if (!inputValueGuess) {
      document.querySelector(".message").textContent = "plz insert Number 😒";
    } else if (inputValueGuess > secretNumber) {
      score--;
      document.querySelector(".message").textContent = "its to high!! 👀😶‍🌫️";
      document.querySelector(".score").textContent = score;
    } else if (inputValueGuess < secretNumber) {
      score--;
      document.querySelector(".message").textContent = "its to low!! 👀🫠";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Julyyy . you win !! 🥹🥳🥳";
      document.querySelector(".number").textContent = secretNumber;

      highScore < score ? (highScore = score) : (highScore = highScore);
      document.querySelector(".highscore").textContent = highScore;
      document.querySelector(".score").textContent;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".check").style.display = "none";
    }
  } else {
    document.querySelector(".message").textContent = " eybi yokhdeh !! 🙄🚽";
    document.querySelector(".check").style.display = "none";
    document.querySelector("body").style.backgroundColor = "#5c5050";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNumber);
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing ... ";
  document.querySelector(".guess").value = null;

  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".check").style.display = "block";
});

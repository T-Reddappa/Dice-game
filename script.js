"use strict";

// selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceButton = document.querySelector(".btn--roll");
const newGame = document.querySelector(".btn--new");

//setting initial scores
//const initialSettings = function () {
diceEl.classList.add("hidden");
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;
//};

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
// on click generate dice number
function diceN() {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //  for (let i = 1; i < 7; i++) {
    // if (diceNumber === i) {
    diceEl.classList.remove("hidden");
    document.querySelector(".dice").src = `dice-${dice}.png`;
    //}}

    if (dice !== 1) {
      // add dice to currentscore
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
}
//}
function holdF() {
  if (playing) {
    //1. add current score to active players score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if aps score is >100
    if (scores[activePlayer] >= 100) {
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      playing = false;
    } else {
      switchPlayer();
    }
  }
}

//new game
const newF = function () {
  //initialSettings();
  diceEl.classList.add("hidden");
  currentScore = 0;
  scores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");
  document.querySelector(".player").classList.remove("player--winner");
  // document.querySelector('.current-score').textContent = 7;
  playing = true;
};
diceButton.addEventListener("click", diceN);
btnHold.addEventListener("click", holdF);
newGame.addEventListener("click", newF);

//if dice number is not 1 , then add the no. to

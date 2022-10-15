"use strict";
const selections = ["rock", "paper", "scissors"];
const getRandomNbr = () => Math.trunc(3 * Math.random());
const computerPlayer = function () {
  const nbr = getRandomNbr();
  return selections[nbr];
};
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "No winners,Draw";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  if (playerSelection === "paper" && computerSelection === "rock")
    return `You won! ${playerSelection} beats ${computerSelection}`;
  if (playerSelection === "scissors" && computerSelection === "paper")
    return `You won! ${playerSelection} beats ${computerSelection}`;
  else return `You Lost! ${computerSelection} beats ${playerSelection}`;
};
const game = function () {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlayer();
    const playerSelection = prompt(
      `Round ${i + 1} : 'Paper' or 'Rock' 'Scissors'`
    ).toLocaleLowerCase();
    if (!selections.some((ele) => ele === playerSelection)) {
      i--;
      continue;
    }
    console.log(playRound(playerSelection, computerSelection));
  }
};
game();

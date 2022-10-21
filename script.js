'use strict';
const choicesContainer = document.querySelector('.choices');
const resultsLabel = document.querySelector('.results__prg');
const restartBtn = document.querySelector('.results__btn');
const btns = document.querySelectorAll('[data-btn]');
const selections = ['rock', 'paper', 'scissors'];
const userScoreLabel = document.getElementById('user-score');
const compScoreLabel = document.getElementById('comp-score');
const state = {
  userScore: 0,
  compScore: 0,
};
const getRandomNbr = () => Math.trunc(3 * Math.random());
const computerPlayer = function () {
  const nbr = getRandomNbr();
  return selections[nbr];
};
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'No winners,Draw';
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  if (playerSelection === 'paper' && computerSelection === 'rock')
    return `You won! ${playerSelection} beats ${computerSelection}`;
  if (playerSelection === 'scissors' && computerSelection === 'paper')
    return `You won! ${playerSelection} beats ${computerSelection}`;
  else return `You Lost! ${computerSelection} beats ${playerSelection}`;
};
const game = function (result) {
  if (result.includes('won')) {
    state.userScore++;
    userScoreLabel.textContent = state.userScore;
  }
  if (result.includes('Lost')) {
    state.compScore++;
    compScoreLabel.textContent = state.compScore;
  }
  resultsLabel.textContent = result;
  if (state.userScore === 5 || state.compScore === 5) {
    resultsLabel.textContent =
      state.userScore === 5 ? 'Game Over, You Won!' : 'Game Over, You Lost!';
    restartBtn.classList.remove('hidden');
    btns.forEach(btn => btn.removeEventListener('click', handleBtnClicked));
    choicesContainer.classList.add('hidden');
  }
};

function handleBtnClicked(e) {
  const playerSelection = e.target.closest('.choices__btn').dataset.btn;
  const computerSelection = computerPlayer();
  const result = playRound(playerSelection, computerSelection);
  game(result);
}
const init = function () {
  btns.forEach(btn => btn.addEventListener('click', handleBtnClicked));
  restartBtn.addEventListener('click', init);
  restartBtn.classList.add('hidden');
  resultsLabel.textContent = 'Make your move';
  choicesContainer.classList.remove('hidden');
  compScoreLabel.textContent = userScoreLabel.textContent = 0;
  state.userScore = state.compScore = 0;
};
init();

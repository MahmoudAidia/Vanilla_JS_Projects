'use strict';

const playerOneCurrentScore = document.querySelector('#current--0');
const playerTwoCurrentScore = document.querySelector('#current--1');
const rollDice = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const playerOneSection = document.querySelector('.player--0');
const playerTwoSection = document.querySelector('.player--1');
const holdBtn = document.querySelector('.btn--hold');
const playerOneTotalScore = document.querySelector('#score--0');
const playerTwoTotalScore = document.querySelector('#score--1');
const newGameBtn = document.querySelector('.btn--new');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const domOutput = document.querySelector('.output');
const modalCloseBtn = document.querySelector('.close-modal');
let randomDice = null;

let playerOneActive = true;

function play(currentSelector) {
  randomDice = Math.trunc(Math.random() * 6 + 1);
  // console.log(randomDice);
  diceImg.src = `dice-${randomDice}.png`;
  let current = document.querySelector(currentSelector);
  if (randomDice !== 1) {
    current.textContent = Number(current.textContent) + randomDice;
  } else {
    current.textContent = 0;
    chooseActivePlayer();
  }
}

function hold() {
  if (playerOneActive) {
    playerOneTotalScore.textContent =
      Number(playerOneTotalScore.textContent) +
      Number(playerOneCurrentScore.textContent);
    playerOneCurrentScore.textContent = 0;
    return {
      player: 'Player 1',
      result: Number(playerOneTotalScore.textContent),
    };
  } else {
    playerTwoTotalScore.textContent =
      Number(playerTwoTotalScore.textContent) +
      Number(playerTwoCurrentScore.textContent);
    playerTwoCurrentScore.textContent = 0;
    return {
      player: 'Player 2',
      result: Number(playerTwoTotalScore.textContent),
    };
  }
}

function chooseActivePlayer() {
  let active = ' player--active';
  if (playerOneActive) {
    playerTwoSection.className = 'player player--1' + active;
    playerOneSection.className = 'player player--0';
  } else if (!playerOneActive) {
    playerTwoSection.className = 'player player--1';
    playerOneSection.className = 'player player--0' + active;
  }
  playerOneActive = !playerOneActive;
}

function reset() {
  playerOneTotalScore.textContent = 0;
  playerTwoTotalScore.textContent = 0;
  playerOneCurrentScore.textContent = 0;
  playerTwoCurrentScore.textContent = 0;
  playerOneSection.className = 'player player--0 player--active';
  playerTwoSection.className = 'player player--1';

  diceImg.src = 'dice-1.png';
}

function closeModal() {
  modal.className = 'modal hidden';
  overlay.className = 'overlay hidden';
}

rollDice.addEventListener('click', function () {
  if (playerOneActive) {
    play('#current--0');
  } else {
    play('#current--1');
  }
});

holdBtn.addEventListener('click', function () {
  const output = hold();
  if (output.result >= 100) {
    playerOneSection.className = 'player player--0';
    playerTwoSection.className = 'player player--1';
    modal.className = 'modal';
    overlay.className = 'overlay';
    domOutput.textContent = `${output.player} Wins!! The result is ${output.result}`;
    return;
  }
  chooseActivePlayer();
});

newGameBtn.addEventListener('click', function () {
  reset();
});

modalCloseBtn.addEventListener('click', function () {
  closeModal();
});

overlay.addEventListener('click', function () {
  closeModal();
});

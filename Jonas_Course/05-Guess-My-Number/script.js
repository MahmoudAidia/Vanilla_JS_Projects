'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);

function checkNumber() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    let highScore = Number(document.querySelector('.highscore').textContent);
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high' : 'Too low';
      let score = Number(document.querySelector('.score').textContent);
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
}

function restart() {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = null;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start Guessing!';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

// Event Listensers
document.querySelector('.check').addEventListener('click', checkNumber);
document.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    checkNumber();
  }
  if (event.code === 'Delete') {
    restart();
  }
});
document.querySelector('.again').addEventListener('click', restart);

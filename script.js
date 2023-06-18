'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

const switchPlayer = function() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

rollBtn.addEventListener('click', function() {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;
    
    if (diceRoll !== 1) {
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {  
        switchPlayer();
    }
})

holdBtn.addEventListener('click', function() {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--winner');
    } else {
        switchPlayer();
    }
})

newGameBtn.addEventListener('click', function() {
    currentScore = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    scores = [0, 0];
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    activePlayer = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
});
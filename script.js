'use strict';

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

rollBtn.addEventListener('click', function() {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;
    
    if (diceRoll !== 1) {
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {  
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    }
})

holdBtn.addEventListener('click', function() {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    }
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
})

newGameBtn.addEventListener('click', function() {
    currentScore = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    scores = [0, 0];
    document.querySelector(`.player--${Number(!activePlayer)}`).classList.remove('player--winner');
    activePlayer = 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    diceEl.classList.add('hidden');
});
'use strict';

const player0El =document.querySelector('.player--0');
const player1El =document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const activePlayer = document.querySelector('.player-active');

let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

rollBtn.addEventListener('click', function() {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;
    
    if (diceRoll !== 1) {
        currentScore += diceRoll;
        currentScore0El.textContent = currentScore;
    } else {
        currentScore = 0;
        currentScore0El.textContent = 0;
    }

})

'use strict';


let current_dice = 0;
let p1CurScore = 0;
let p2CurScore = 0;
let currentPlayerState = 1;
let p1Score = 0;
let p2Score = 0;
let playing = true;

// player
const player_1 = document.querySelector('.player--0');
const player_2 = document.querySelector('.player--1');
let score_p1 = document.getElementById('score--0');
let score_p2 = document.getElementById('score--1');
let current_score_p1 = document.getElementById('current--0');
let current_score_p2 = document.getElementById('current--1');


// component
const button_new_game = document.querySelector('.btn--new');
const button_roll = document.querySelector('.btn--roll');
const button_hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');


// fuction 
const init_or_reset = () => {
    score_p1.textContent = 0;
    score_p2.textContent = 0;
    current_score_p1.textContent = 0;
    current_score_p2.textContent = 0;
    currentPlayerState = 1;
    p1CurScore, p2CurScore = 0;
    p1Score, p2Score = 0;
    dice.classList.add('hidden');
    player_1.classList.remove('player--winner');
    player_2.classList.remove('player--winner');
    player_1.classList.add('player--active');
    player_2.classList.remove('player--active');
    playing = true;
}

const generateRanDice = () => {
    current_dice = Math.floor(Math.random() * 6) + 1;
    return `dice-${current_dice}.png`;
}

const checkWinner = (number, p) => {
    if (number >= 20) {
        if (p === 'p1') {
            player_1.classList.add('player--winner');
            player_2.classList.toggle('player--active');
        } else {
            player_2.classList.add('player--winner');
            player_1.classList.toggle('player--active');
        }
        playing = false;
    }
}

const currentScore = (p, score) => {
    if (p === 'p1') {
        current_score_p1.textContent = score;
    } else {
        current_score_p2.textContent = score;
    }
}

init_or_reset();

button_roll.addEventListener('click', function () {
    if (playing) {
        dice.classList.remove('hidden');
        dice.src = generateRanDice();
        if (currentPlayerState === 1) {
            if (current_dice === 1) {
                current_dice--;
                p1CurScore = 0;
                currentPlayerState = 2;
                player_1.classList.toggle('player--active');
                player_2.classList.toggle('player--active');
            }
            p1CurScore += current_dice;
            currentScore('p1', String(p1CurScore));
        } else {
            if (current_dice === 1) {
                current_dice--;
                p2CurScore = 0;
                currentPlayerState = 1;
                player_1.classList.toggle('player--active');
                player_2.classList.toggle('player--active');
            }
            p2CurScore += current_dice;
            currentScore('p2', String(p2CurScore));
        }
    }
});

button_hold.addEventListener('click', function () {
    if (playing) {
        if (currentPlayerState === 1) {
            p1Score += p1CurScore;
            score_p1.textContent = p1Score;
            currentPlayerState = 2;
            p1CurScore = 0;
            currentScore('p1', String(p1CurScore));
            checkWinner(p1Score, 'p1');
            player_1.classList.toggle('player--active');
            player_2.classList.toggle('player--active');
        } else {
            p2Score += p2CurScore;
            score_p2.textContent = p2Score;
            currentPlayerState = 1;
            p2CurScore = 0;
            currentScore('p2', String(p2CurScore));
            checkWinner(p2Score, 'p2');
            player_1.classList.toggle('player--active');
            player_2.classList.toggle('player--active');
        }    
    }
});

button_new_game.addEventListener('click', init_or_reset);

'use strict';

// # => id
// . => class
const button_check = document.querySelector('.check');
const button_again = document.querySelector('.again');

const calcHighScore = number => {
    (number > highscore) ? highscore = number : '';
    return document.querySelector('.highscore').textContent = highscore;
}

const displayMessage = (messages, the_class) => document.querySelector(the_class).textContent = messages;
const changeBackground = (where, color) => document.querySelector(where).style.backgroundColor = color;
const generateRanNum = () => Math.floor(Math.random() * 21);

const process_input = () => {
    if (!status_play) {
        const guess_number = Number(document.querySelector('.guess').value);
        if (life >= 1) {
            if (guess_number === randomNum) {
                displayMessage('You are correct 🎉', '.message');
                displayMessage(randomNum, '.number');
                calcHighScore(life);
                changeBackground('body', '#78f400');
                status_play = true;
            } else {
                displayMessage(((guess_number < randomNum) ? 'To Low' : 'To High'), '.message');
                life--;
                displayMessage(life, '.score');
            }
            if (life === 0) {
                displayMessage('🧨 You Lost the game!');
                status_play = true;
            }
        } 
    } else return;
}

const reset_process = () => {
    displayMessage('?', '.number');
    life = 20;
    displayMessage(life, '.score');
    displayMessage('Start Guessing ...', '.message');
    document.querySelector('.guess').value = null;
    status_play = false;
    changeBackground('body', '#222');
    generateRanNum();
}

// main program
let randomNum = generateRanNum();
let life = 20;
let max = 0;
let highscore = 0;
let status_play = false;

button_check.addEventListener('click', process_input);
button_again.addEventListener('click', reset_process);
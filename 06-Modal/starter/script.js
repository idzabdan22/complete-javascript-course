'use strict';


const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const open_button = document.querySelectorAll('.show-modal');
const close_button = document.querySelector('.close-modal');

for (let i = 0; i < 3; i++){
    open_button[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
};

close_button.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');    
        }
    }
});
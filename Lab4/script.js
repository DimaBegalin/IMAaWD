const dice_images = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 
    'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

const roll_button = document.getElementById('roll_button');
const clear_button = document.getElementById('clear_button');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const result = document.getElementById('result');
const history = document.getElementById('history');
const win_modal = document.getElementById('win_modal_window');
const close_modal = document.getElementById('close_modal_window');

let roll_count = 0;


roll_button.addEventListener('click', roll_dice);
clear_button.addEventListener('click', clear_history)
close_modal.addEventListener('click', () => {
    win_modal.style.display = 'none';
});
// Main function to roll dices randomly
function roll_dice() {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    dice1.src = dice_images[roll1 - 1];
    dice2.src = dice_images[roll2 - 1];

    result.textContent = `You rolled a ${roll1} and a ${roll2}. Sum: ${roll1 + roll2}`;
    add_history(roll1, roll2);

    if (roll1 === roll2) {
        win_modal.style.display = 'block';
        // Call a function of closing the modal window after 3000 milliseconds
        setTimeout(function(){
            win_modal.style.display = 'none';
        }, 3000);
    }
}
// Adding history of the game
function add_history(roll1, roll2) {
    roll_count++;
    const new_entry = document.createElement('p');
    new_entry.textContent = `Roll ${roll_count}: You rolled ${roll1} and ${roll2} (Sum: ${roll1 + roll2})`;
    if (roll1 === roll2) {
        new_entry.style.color = 'green';
    }
    history.appendChild(new_entry);
}

function clear_history(){
    history.innerHTML = '';
    result.textContent = '';

}
function playNote(note) {
  const audio = new Audio(`audio/${note}.wav`);
  audio.play();
}


const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('click', () => {
    const note = key.dataset.note; 
    playNote(note); 
    key.classList.add('active');

    
    setTimeout(() => key.classList.remove('active'), 150);
  });
});


document.addEventListener('keydown', (event) => {
  const keyMap = { a: 'C', s: 'D', d: 'E', f: 'F', g: 'G', h: 'A', j: 'B' };
  const note = keyMap[event.key];
  if (note) {
    playNote(note);
    const keyElement = document.querySelector(`[data-note="${note}"]`);
    keyElement.classList.add('active');

    
    setTimeout(() => keyElement.classList.remove('active'), 150);
  }
});
  
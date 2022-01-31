const nextButton = document.querySelector('.next-button');
//SVG
const levelOne = document.querySelector('.level-one');
const levelTwo = document.querySelector('.level-two');
//UI MESSAGES
const uiLevel = document.querySelector('.ui-level');
const uiMessage = document.querySelector('.ui-message');
//End Game
const picture = document.querySelector('.picture');
const sound = document.querySelector('.sound');

const collisionCheck = (value) => {
	if (value === 'maze-border') alert('You lost...try again.');
	if (value === 'maze-finish') {
		nextButton.style.opacity = 1;
		nextButton.style.pointerEvents = 'all';
		levelOne.style.pointerEvents = 'none';
	}
	if (value === 'end-game') {
		sound.play();
		picture.style.display = 'block';
		document.body.style.background = 'black';
	}
};

window.addEventListener('mousemove', (e) => {
	let check = e.target.classList.value;
	collisionCheck(check);
});

nextButton.addEventListener('click', () => {
	levelOne.style.display = 'none';
	levelTwo.style.display = 'block';
	nextButton.style.opacity = 0;
	nextButton.style.pointerEvents = 'none';
	ui;
	uiLevel.textContent = 'Level 2';
	uiMessage.textContent = 'One more to go...';
});

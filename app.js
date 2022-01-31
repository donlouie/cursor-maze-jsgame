const nextButton = document.querySelector('.next-button');
//SVG
const levelOne = document.querySelector('.level-one');
const levelTwo = document.querySelector('.level-two');
const levelThree = document.querySelector('.level-three');
//UI MESSAGES
const uiLevel = document.querySelector('.ui-level');
const uiMessage = document.querySelector('.ui-message');
//End Game
const picture = document.querySelector('.picture');
const sound = document.querySelector('.sound');

const collisionCheck = (value) => {
	if (value === 'maze-border') alert('You lost...try again.');
	if (value === 'maze-one-finish') {
		nextButton.textContent = 'Level 2';
		nextButton.style.opacity = 1;
		nextButton.style.pointerEvents = 'all';
		levelOne.style.pointerEvents = 'none';
	}
	if (value === 'maze-two-finish') {
		nextButton.textContent = 'Level 3';
		nextButton.style.opacity = 1;
		nextButton.style.pointerEvents = 'all';
		levelTwo.style.pointerEvents = 'none';
	}
	if (value === 'end-game') {
		sound.play();
		picture.style.display = 'block';
		document.body.style.background = 'b lack';
	}
};

window.addEventListener('mousemove', (e) => {
	let check = e.target.classList.value;
	collisionCheck(check);
	console.log(check);
});

nextButton.addEventListener('click', () => {
	if (nextButton.textContent === 'Level 2') {
		levelOne.style.display = 'none';
		levelTwo.style.display = 'block';
		nextButton.style.opacity = 0;
		nextButton.style.pointerEvents = 'none';
		ui;
		uiLevel.textContent = 'Level 2';
		uiMessage.textContent = 'Almost there...';
	}
	if (nextButton.textContent === 'Level 3') {
		levelTwo.style.display = 'none';
		levelThree.style.display = 'block';
		nextButton.style.opacity = 0;
		nextButton.style.pointerEvents = 'none';
		ui;
		uiLevel.textContent = 'Level 3';
		uiMessage.textContent = 'One more to go...';
	}
});

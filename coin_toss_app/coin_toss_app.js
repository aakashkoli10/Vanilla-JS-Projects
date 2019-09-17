const msg = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
let score = [0, 0];

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', tossCoin);
}

function tossCoin(e) {
	const coinArray = ['Heads', 'Tails'];
	let playerGuess = e.target.innerText;
	let computerToss = Math.floor(Math.random() * 2);
	let computerGuess = coinArray[computerToss];
	msg.innerHTML = `Computer Selected ${computerGuess}<br>`;
	let output;

	if (playerGuess === computerGuess) {
		output = 'Player Wins';
		score[0]++;
	} else {
		output = 'Computer Wins';
		score[1]++;
	}

	msg.innerHTML += `${output} <br>Player ${score[0]} Computer ${score[1]}`;
}
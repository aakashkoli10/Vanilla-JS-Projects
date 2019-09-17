const output = document.querySelector('.output');
const button = document.querySelector('button');

button.addEventListener('click', function() {
	const msg = document.querySelector('input');
	let temp = `<h1>Hello welcome, ${msg.value}</h1>`
	output.innerHTML = temp;
});
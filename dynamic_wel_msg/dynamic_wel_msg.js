const output = document.querySelector('.output');
output.setAttribute('style', 'width: 200px; height: 100px; color: white; text-align: center')
const button = document.querySelector('button');

button.addEventListener('click', function() {
	const date = new Date();
	let hour = date.getHours();
	let message;
	if (hour > 17) {
		message = 'Its evening';
		output.style.backgroundColor = 'black';
	} else if (hour > 12) {
		message = 'Its afternoon';
		output.style.backgroundColor = 'blue';
	} else if (hour > 0) {
		message = 'Its morning';
		output.style.backgroundColor = 'orange';
	} else {
		message = 'Something went wrong';
		output.style.backgroundColor = 'red';
	}

	output.innerHTML = `<h1>${message}</h1>`; 
});
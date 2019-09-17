const copyTxt = document.querySelector('textarea[name=copyTxt]');
const finalTxt = document.querySelector('textarea[name=finalTxt]');
const moveBtn = document.querySelector('.moveBtn');
const copyBtn = document.querySelector('.copyBtn');
const output = document.querySelector('.output');

moveBtn.addEventListener('click', moveText);
copyBtn.addEventListener('click', copyText);

function moveText(e) {
	// let temp = copyTxt.value;
	// finalTxt.value = temp;
	copyTxt.select();
	document.execCommand('cut');
}

function copyText(e) {
	const textarea = document.createElement('textarea');
	textarea.value = copyTxt.value;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
	output.innerHTML = "<h3>Copied Content</h3>" + textarea.value;
	// copyTxt.select();
	// document.execCommand('copy');
}
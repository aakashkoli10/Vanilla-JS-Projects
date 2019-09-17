const images = document.querySelectorAll('.pop img');
const output = document.querySelector('.output');
const show = document.querySelector('.show');
const close = document.querySelectorAll('.close');

images.forEach(function(ele) {
	ele.addEventListener('click', popImage);
});

function popImage(e) {
	console.log(this.src);
	output.querySelector('img').setAttribute('src', this.src);
	show.classList.remove('hide');
}

close.forEach(function(ele) {
	ele.addEventListener('click', closePopUp);
});

function closePopUp(e) {
	show.classList.add('hide');
}
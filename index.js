const targetParagraph = document.getElementById('pTarget');
const button = document.getElementById('clickBtn');

button.addEventListener('click', (event) => {
	event.preventDefault();
	event.stopPropagation();
	targetParagraph.textContent = `Random broj je ${Math.floor(
		Math.random() * 11,
	)}`;
});

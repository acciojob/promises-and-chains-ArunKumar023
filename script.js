let userDetails = document.querrySelector('form');
const form = document.querySelector('#myForm');
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const btn = document.querySelector('#btn');

userDetails.addEventListener('onsubmit', promiseResolve);
form.addEventListener('onsubmit', (event) => {
	event.preventDefault();

	if(name.value === '' || age.value === '') {
		alert('Please fill out all fiels.');
		return;
	}

function promiseResolve(event){
	return new Promise((resolve, reject) => {
		event.preventDefault();
	const age = parseInt(age.value);

	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if(document.getElementById('age').value >= 18){
				resolve(alert(`Welcome, ${document.getElementById('name').value}. You can vote.`));
			}
			resolve(alert(`Welcome, ${document.getElementById('name').value}. You aren't old enough.`));
			if(age >= 18) resolve();
			reject();
		}, 4 * 1000);
	});
}

	promise.then(() => {
		alert(`Welcome, ${name.value}. You can vote.`);
	})
	.catch(() => {
		alert(`Welcome, ${name.value}. You aren't old enough.`);
	});
});
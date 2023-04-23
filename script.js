const form = document.querySelector('form');
const ageInput = document.querySelector('#age');
const nameInput = document.querySelector('#name');
const submitBtn = document.querySelector('#btn');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission behavior
  
  // validate inputs
  if (ageInput.value.trim() === '' || nameInput.value.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  // create promise
  const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const age = parseInt(ageInput.value);
      if (age >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  });

  // handle promise resolution/rejection
  agePromise
    .then(() => {
      alert(`Welcome, ${nameInput.value}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${nameInput.value}. You aren't old enough.`);
    });

  // reset form
  form.reset();
});

// Getting the submit button
let submitNumber = document.querySelector('.get-jokes');

// Adding an event listener to the button
submitNumber.addEventListener('click', getJokes);

function getJokes(e) {
  // Get the number input
  const number = document.querySelector('input[type=number]').value;

  const xhr = new XMLHttpRequest();

  let output = '';

  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const res = JSON.parse(this.responseText);

      console.log(res);

      if (res.type === 'success') {
        res.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output = '<li>Something went wrong!</li>';
      }
      document.querySelector('.output').innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}

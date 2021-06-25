//  trivia

const form = document.querySelector('form');
      const factDiv = document.querySelector('.card-text4');

      form.addEventListener('submit', (e) => {
  e.preventDefault();
  const loadText ="This is The Result 😉";
  factDiv.innerHTML = loadText;
  const baseURL = "http://numbersapi.com/";
  const number = e.target.querySelector('input[type="number"]').value;
  fetch(baseURL + number)
    .then(response => response.text())
    .then(data => {
      console.log(data);
      document.getElementById('triviaresult')
      factDiv.innerHTML = data;

    });
  })

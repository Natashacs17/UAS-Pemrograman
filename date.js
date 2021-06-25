// random date

const form4 = document.querySelector('form4');
const factDiv5 = document.querySelector('.card-text5');

window.addEventListener('load', (e) => {
    e.preventDefault();
    fetch("http://numbersapi.com/random/date")
      .then(response => response.text())
      .then(data => {
    console.log(data);
    document.getElementById('resultdate')
    factDiv5.innerHTML = data;
  });
})
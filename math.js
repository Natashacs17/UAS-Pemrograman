// random math

const form3 = document.querySelector('form3');
const factDiv4 = document.querySelector('.card-text3');

window.addEventListener('load', (e) => {
    e.preventDefault();
    fetch("http://numbersapi.com/random/math")
      .then(response => response.text())
      .then(data => {
    console.log(data);
    document.getElementById('cekcardrandom')
    factDiv4.innerHTML = data;
  });
})
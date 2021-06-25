// random year

const form2 = document.querySelector('form2');
const factDiv3 = document.querySelector('.card-text2');

window.addEventListener('load', (e) => {
    e.preventDefault();
    fetch("http://numbersapi.com/random/year")
      .then(response => response.text())
      .then(data => {
    console.log(data);
    document.getElementById('yearresult')
    factDiv3.innerHTML = data;
  });
})
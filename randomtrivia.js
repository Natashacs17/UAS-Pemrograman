 // random trivia

 const form1 = document.querySelector('form1');
 const factDiv2 = document.querySelector('.card-text1');
 
 window.addEventListener('load', (e) => {
     e.preventDefault();
     fetch("http://numbersapi.com/random/trivia")
       .then(response => response.text())
       .then(data => {
     console.log(data);
     document.getElementById('cekcardrandom')
     factDiv2.innerHTML = data;
   });
 })
 
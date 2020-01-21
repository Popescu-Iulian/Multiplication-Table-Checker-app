function newGame() {
  let val1 = Math.floor(Math.random() * 11);
  let val2 = Math.floor(Math.random() * 11);

  document.querySelector('#numberOne').innerText = val1;
  document.querySelector('#numberTwo').innerText = val2;
}

function validate() {
  let val1 = Number(document.querySelector('#numberOne').innerText);
  let val2 = Number(document.querySelector('#numberTwo').innerText);

  let userVal = Number(document.querySelector('#userValue').value);

  if (val1 * val2 === userVal) {
    alert('Raspunsul este corect. Bravo!');
    newGame();
    document.querySelector('#userValue').value = '';
  } else {
    alert('Raspunsul este incorect. Mai incearca!!');
  }
}

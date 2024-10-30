function populateBoard(size) {
  /** @type {HTMLElement} */
  let board = document.querySelector('.board');
  board.innerHTML = '';
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  let amount = size*size;
  for (let i=0; i<amount; i++) {
      let square = document.createElement('div');
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
      })
      square.style.backgroundColor = 'blue';
      board.insertAdjacentElement('beforeend', square);
  }
}

populateBoard(16);


let button = document.querySelector('.button');
button.addEventListener('click', () =>{
  let input = prompt("How big do you want the grid to be?");
  if (input>1 && input<101){
    populateBoard(input);
  }
  else if (input < 2) {
    alert("Try a larger number!");
  }
  else if (input > 100) {
    alert("Try a smaller number!");
  }
  else {
    alert("That isn't a number!");
  }
})
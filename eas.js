function populateBoard(size) {
  /** @type {HTMLElement} */
  let board = document.querySelector('.board');
  board.innerHTML = '';
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  let amount = size*size;
  for (let i=0; i<amount; i++) {
      let square = document.createElement('div');
      let brightness = 1;
      square.addEventListener('mouseover', () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        
        square.style.backgroundColor = `${color}`;
      })

      square.addEventListener('mouseover', () =>{
        brightness -= 0.1; // Adjust this value for the darkening amount
        if (brightness < 0) brightness = 0;
          square.style.filter = `brightness(${brightness})`;
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
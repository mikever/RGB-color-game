let numSquares = 6;
let colors = [];
let pickedColor;

const h1 = document.querySelector('h1');
const squares = document.querySelectorAll('.square');
const messageDisplay = document.querySelector('#message');
const resetButton = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('.mode');
const colorDisplay = document.querySelector('#colorDisplay');

init();

function init () {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons () {
  for (let button of modeButtons) {
    button.addEventListener('click', function () {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      button.classList.add('selected');
      button.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setupSquares () {
  for (let square of squares) {
    // add click listeners to squares
    square.addEventListener('click', function () {
      // grab color of clicked square
      let clickedColor = square.style.backgroundColor;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        square.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again!';
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  // pick new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match 
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';
  // change colors of the squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  // reset bar background color
  h1.style.backgroundColor = 'steelblue';
  // reset button text
  resetButton.textContent = 'New Colors';
};

resetButton.addEventListener('click', reset);

function changeColors (color) {
  for (let square of squares) {
    square.style.backgroundColor = color;
  }
};

function pickColor () {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors (num) {
  // make an array
  let arr = [];
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  return arr;
}

function randomColor () {
  // pick a 'red' from 0 - 255
  let r = Math.floor(Math.random() * 256);
  // pick a 'green' from 0 - 255
  let g = Math.floor(Math.random() * 256);
  // pick a 'blue' from 0 - 255
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
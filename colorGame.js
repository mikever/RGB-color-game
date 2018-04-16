const h1 = document.querySelector('h1');
const squares = document.querySelectorAll('.square');
const messageDisplay = document.querySelector('#message');
const resetButton = document.querySelector('#reset');

let colors = generateRandomColors(6);
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');

resetButton.addEventListener('click', function() {
  // generate all new colors
  colors = generateRandomColors(6);
  // pick new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match 
  colorDisplay.textContent = pickedColor;
  // change colors of the squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  // reset bar background color
  h1.style.backgroundColor = '#232323'
  // reset button text
  resetButton.textContent = 'New Colors';
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener('click', function() {
    // grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!';
      resetButton.textContent = 'Play Again?';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again!';
    }
  });
}

function changeColors (color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
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
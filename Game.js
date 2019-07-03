//defining all variables
var numSqures = 6;
var colors = [];
var toGuess;
//getting all DOM
var squares = document.querySelectorAll(".square");
var guess = document.querySelector("header h1");
var message = document.querySelector("#message");
var background = document.querySelector("header");
var newColors = document.querySelector("#refresh");
var mode = document.querySelectorAll(".mode");

//setting the color to guess
guess.textContent = toGuess;

//reset listener:
newColors.addEventListener("click", reset);

init();

function init() {
  //mode listeners
  for (var x = 0; x < mode.length; x++) {
    mode[x].addEventListener("click", modeSetUp);
  };
  for (var x = 0; x < squares.length; x++) {
    squares[x].addEventListener("click", playGame);
  };
  reset();
}

function modeSetUp() {
  mode[0].classList.remove("selected");
  mode[1].classList.remove("selected");
  this.classList.add("selected");
  this.textContent === "Easy" ? numSqures = 3 : numSqures = 6;
  reset();
}

//game engine
function playGame() {
  var guessed = this.style.backgroundColor;
  if (guessed === toGuess) {
    message.textContent = "Correct!";
    changeColors(toGuess);
    background.style.backgroundColor = toGuess;
    newColors.textContent = "Play Again?"
  } else {
    this.style.backgroundColor = "#232323";
    message.textContent = "Try Again"
  };
}


//changes colors for specified ammount of squares
function changeColors(color) {
  for (var x = 0; x < squares.length; x++) {
    squares[x].style.backgroundColor = color;
  };
};

//generates a random number
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return (random);
};

//random RGB color function
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return ("rgb(" + r + ", " + g + ", " + b + ")");
};

//generate an array of random colors
function generateRandomColors(num) {
  var arr = [];
  for (var x = 0; x < num; x++) {
    arr.push(randomColor());
  };
  return (arr);
};

//reset function
function reset() {
  colors = generateRandomColors(numSqures);
  toGuess = colors[pickColor()];
  guess.textContent = toGuess;
  newColors.textContent = "New Colors";
  message.textContent = "";
  background.style.backgroundColor = "rgb(58, 122, 168)";
  for (var x = 0; x < squares.length; x++) {
    if (colors[x]) {
      squares[x].style.display = "block";
      squares[x].style.backgroundColor = colors[x];
    } else {
      squares[x].style.display = "none"
    };
  };
};
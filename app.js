let score = 0;
console.log(score);

var audio = new Audio("./music.mp3");
var hurt1 = new Audio("./take_one.mp3");
var hurt2 = new Audio("./take_two.mp3");
var hurt3 = new Audio("./take_three.mp3");
var eat = new Audio("./eat.mp3");

var array = ["right", "left", "up", "down"];

audio.play();
audio.volume = 0.1;

// ==================
// Creating my layout
// ==================

let layout = [
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  1,
  1,
  1,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  1,
  1,
  1,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  1,
  1,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
];

// ================================================
// creating an empty square to draw a layout inside
// ================================================

let squares = [];

// =============
// DOM from HTML
// =============
const arena = document.querySelector(".arena");
const pacman = document.querySelector(".pac");
const displayScore = document.querySelector(".score");
const ghost = document.querySelector(".ghost");

// ===================
// Draw inside squares
// ===================

function draw() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement("div");
    arena.appendChild(square);
    squares.push(square);

    if (layout[i] === 1) {
      squares[i].classList.add("points");
    } else if (layout[i] === 2) {
      squares[i].classList.add("wall");
    } else if (layout[i] === 3) {
      squares[i].classList.add("pac");
    } else if (layout[i] === 4) {
      squares[i].classList.add("ghost");
    } else if (layout[i] === 5) {
      squares[i].classList.add("vaccin");
    }
  }
}

// ===================
// Call draw function
// ===================

draw();

// ======================
// Intiating pacman place
// ======================

let Index = 180;
squares[Index].classList.remove("points");
squares[Index].classList.add("pac");

// =====================
// Intiating ghost place
// =====================

let IndexG = 467;
squares[IndexG].classList.add("ghost");

function randomDirection() {
  return array[Math.floor(Math.random() * array.length)];
}

function moveGhost() {
  squares[IndexG].classList.remove("ghost");

  const random = randomDirection();
  switch (random) {
    case "up":
      if (!squares[IndexG - 25].classList.contains("wall")) IndexG -= 25;
      break;
    case "left":
      if (!squares[IndexG - 1].classList.contains("wall")) IndexG -= 1;

      break;
    case "down":
      if (!squares[IndexG + 25].classList.contains("wall")) IndexG += 25;

      break;
    case "right":
      if (!squares[IndexG + 1].classList.contains("wall")) IndexG += 1;

      console.log("lol");
      break;
    default:
      console.log("nothing is heappening");
      break;
  }
  
  squares[IndexG].classList.add("ghost");
}

// =====================
// Moving pacman
// =====================

function movePacman(e) {
  squares[Index].classList.remove("pac");
  if (e.key === "ArrowUp" && !squares[Index - 25].classList.contains("wall")) {
    console.log(`Key "${e.key}" pressed`);
    Index -= 25;
  } else if (
    e.key === "ArrowDown" &&
    !squares[Index + 25].classList.contains("wall")
  ) {
    console.log(`Key "${e.key}" pressed`);
    Index += 25;
  } else if (
    e.key === "ArrowLeft" &&
    !squares[Index - 1].classList.contains("wall")
  ) {
    console.log(`Key "${e.key}" pressed`);
    Index -= 1;
  } else if (
    e.key === "ArrowRight" &&
    !squares[Index + 1].classList.contains("wall")
  ) {
    console.log(`Key "${e.key}" pressed`);
    Index += 1;
  }
  eatPoints();
  pacDie();
  squares[Index].classList.remove("points");
  squares[Index].classList.add("pac");
  squares[Index].classList.add("nothing");
  if (squares[Index] !== squares[IndexG]) {
    console.log("STOP THE GAME");
  }
}

// ==========
// Game Over
// ==========

function pacDie() {
  if (squares[Index] == squares[IndexG]) {
    console.log("STOP THE GAME");
    if (score > 100) {
      hurt1.play();
      score -= 30;
    } else if (score < 50) {
      hurt3.play();
      score -= 50;
      arena.innerHTML = "GAME OVER";
    } else if (score > 80) {
      hurt3.play();
      score -= 30;
    }
  }
}

// ==========
// Move ghost
// ==========

setInterval(() => {
  moveGhost();
  console.log(IndexG);
}, 500);

document.addEventListener("keyup", movePacman);

function eatPoints() {
  // const displayScore = document.getElementById("score")
  if (squares[Index].classList.contains("points")) {
    eat.play();    
    score += 2;
    displayScore.innerHTML = score;
    squares[Index].classList.remove("points");
  }
}

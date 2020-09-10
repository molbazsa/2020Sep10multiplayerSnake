const BG_COLOR = "#231f20";
const SNAKE_COLOR = "#c2c2c2";
const FOOD_COLOR = "#e66916";

const socket = io("http://localhost:3000");

socket.on("init", (msg) => {
  console.log(msg);
});

socket.on("gameState", (gameState) => {
  gameState = JSON.parse(gameState);
  requestAnimationFrame(() => paintGame(gameState));
});

const gameSrceen = document.getElementById("gameScreen");

let canvas, ctx;

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  canvas.width = 600;
  canvas.height = 600;

  // Filling canvas with off-black color
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  document.addEventListener("keydown", keydown);
}

function keydown(e) {
  console.log(e.keyCode);
}

init();

function paintGame(state) {
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const food = state.food;
  const gridsize = state.gridsize;
  const size = canvas.width / gridsize;

  ctx.fillStyle = FOOD_COLOR;
  ctx.fillRect(food.x * size, food.y * size, size, size);

  paintPlayer(state.player, size, SNAKE_COLOR);
}

function paintPlayer(playerState, size, color) {
  const snake = playerState.snake;
  ctx.fillStyle = color;

  snake.forEach((cell) => {
    ctx.fillRect(cell.x * size, cell.y * size, size, size);
  });
}

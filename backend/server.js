const io = require("socket.io")();
const { createGameState, gameLoop } = require("./game");
const { FRAME_RATE } = require("./constants");

function startGameInterval(client, state) {
  const intervalId = setInterval(() => {
    const winner = gameLoop(state);

    if (winner) {
      client.emmit("gameOver");
      clearInterval(intervalId);
    } else {
      client.emit("gameState", JSON.stringify(state));
    }
  }, 1000 / FRAME_RATE);
}

io.on("connection", (client) => {
  const state = createGameState();

  startGameInterval(client, state);
});

io.listen(3000);

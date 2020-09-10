const { GRID_SIZE } = require("./constants");

function createGameState() {
  return {
    player: {
      pos: {
        x: 3,
        y: 10,
      },
      vel: {
        x: 1,
        y: 0,
      },
      snake: [
        { x: 1, y: 10 },
        { x: 2, y: 10 },
        { x: 3, y: 10 },
      ],
    },
    food: {
      x: 7,
      y: 7,
    },
    gridsize: GRID_SIZE,
  };
}

function gameLoop(state) {
  if (!state) return;
  const playerOne = state.player;
}

module.exports = {
  createGameState,
  gameLoop,
};

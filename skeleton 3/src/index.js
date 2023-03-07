const View = require("./ttt-view.js");
const Game = require("../ttt_node/game.js");

document.addEventListener("DOMContentLoaded", () => {
  const g = new Game();

  const ttt = document.querySelector(".ttt");
  window.ttt = ttt;

  const v = new View(g, ttt);
  window.v = v;
});

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }

  setupBoard() {
    const ul = document.createElement("ul");
  }

  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}
}

module.exports = View;

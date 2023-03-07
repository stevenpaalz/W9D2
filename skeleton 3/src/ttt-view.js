class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const ul = document.createElement("ul");

    for (let i = 0; i < this.game.board.grid.length; i++) {
      let row = this.game.board.grid[i];
      for (let j =0; j < row.length; j++) {
        let cell = row[j];
        let li = document.createElement("li");
        li.dataset.row = i;
        li.dataset.col = j;
        li.classList.add("cells")
        ul.append(li);
      }
    }

    ul.style.display = "flex";
    ul.style.width = "600px";
    ul.style.flexWrap = "wrap";
    
    ttt.append(ul);

  }

  bindEvents() {}

  handleClick(e) {
    let row = e.target.dataset.row;
    let col = e.target.dataset.col;
    let square = [row, col];
    this.makeMove(square);
  }

  makeMove(square) {
    if (!this.game.board.isEmptyPos(square)) {alert('Is not an empty position!')}
    else {
      this.game.playMove(square)
      e.target.classList.remove(".cells");
      e.target.classList.add(".clicked");
    }
  }
}

module.exports = View;

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    const ul = document.createElement("ul");

    for (let i = 0; i < this.game.board.grid.length; i++) {
      let row = this.game.board.grid[i];
      for (let j = 0; j < row.length; j++) {
        let cell = row[j];
        let li = document.createElement("li");
        li.dataset.row = i;
        li.dataset.col = j;
        li.innerText = cell;
        li.classList.add("cells");
        ul.append(li);
      }
    }

    ul.style.display = "flex";
    ul.style.width = "600px";
    ul.style.flexWrap = "wrap";

    ttt.append(ul);
  }

  bindEvents() {
    const ul = document.querySelector("ul");
    ul.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    let row = e.target.dataset.row;
    let col = e.target.dataset.col;
    let square = [row, col];
    let that = e.target;
    this.makeMove(square, that);
  }

  makeMove(square, that) {
    if (!this.game.board.isEmptyPos(square)) {
      alert("Is not an empty position!");
    } else {
      this.game.playMove(square);
      that.innerText = this.game.board.grid[square[0]][square[1]];
      that.classList.add("clicked");
      if (that.innerText === "x") {
        that.classList.add("red");
      } else {
        that.classList.add("blue");
      }
      if (this.game.isOver()) {
        alert(`Congrats ${this.game.winner()}`);
      }
    }
  }
}

module.exports = View;

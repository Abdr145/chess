// src/components/game/GameContext.js

export default class GameContext {
  constructor() {
    this.board = this.initializeBoard();
    this.history = [];
    this.listeners = [];
    this.checkmate = false;
  }

  getBoard() {
    return this.board;
  }

  onChange(fn) {
    this.listeners.push(fn);
  }

  notifyListeners() {
    this.listeners.forEach(fn => fn());
  }

  initializeBoard() {
    return Array(8).fill(null).map(() =>
      Array(8).fill(null).map(() => ({
        piece: null
      }))
    );
  }

  handleSquareClick(square) {
    this.notifyListeners();
  }

  restartGame() {
    this.board = this.initializeBoard();
    this.history = [];
    this.checkmate = false;
    this.notifyListeners();
  }
}

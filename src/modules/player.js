import { Gameboard } from "./gameboard.js";

class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }
}

const createPlayer = function () {
  let player = new Gameboard();
  player.createShips();
  return player;
};

const createComputer = function () {
  let computer = new Gameboard();
  computer.createShips();
  return computer;
};

export { createPlayer, createComputer };

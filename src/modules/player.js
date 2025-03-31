import { Gameboard } from "./gameboard.js";

class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }
}

const createPlayer = function () {
  let player = new Player(new Gameboard());
  player.gameboard.createShips();
  return player;
};

const createComputer = function () {
  let computer = new Player(new Gameboard());
  computer.gameboard.createShips();
  return computer;
};

export { createPlayer, createComputer, Player };

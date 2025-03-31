import { createPlayer, createComputer } from "./player.js";
import { shipHelperFunctions } from "./ship-helpers.js";

const renderGameboards = (function () {
  function createPlayerBoard() {
    const boardContainer = document.querySelector(".player-board");
    for (let y = 0; y < 10; y++) {
      // Bottom (0) to top (9)
      let row = document.createElement("div");
      row.classList.add("row");

      for (let x = 0; x < 10; x++) {
        // Left (0) to right (9)
        let cell = document.createElement("div");
        cell.classList.add("cell", "player");
        cell.id = `${x},${y}`;
        row.appendChild(cell);
      }

      boardContainer.prepend(row); // Prepend to ensure correct order
    }
    placePlayerShips();
  }

  function createCpuBoard() {
    const boardContainer = document.querySelector(".cpu-board");
    for (let y = 0; y < 10; y++) {
      // Bottom (0) to top (9)
      let row = document.createElement("div");
      row.classList.add("row");

      for (let x = 0; x < 10; x++) {
        // Left (0) to right (9)
        let cell = document.createElement("div");
        cell.classList.add("cell", "cpu", `${x},${y}`);
        // cell.id = `${x},${y}`;
        row.appendChild(cell);
      }

      boardContainer.prepend(row); // Prepend to ensure correct order
    }
    placeCpuShips();
  }

  function placePlayerShips() {
    let player = createPlayer();
    let playerShipsArr = shipHelperFunctions.concatPlacementArr(player.ships);
    let playerShipsArrString = playerShipsArr.map((ship) => ship.toString());

    for (let i = 0; i < playerShipsArrString.length; i++) {
      let shipCell = document.querySelector(
        `[id="${playerShipsArrString[i]}"]`
      );
      shipCell.classList.add("active", "visible");
    }
  }

  function placeCpuShips() {
    let computer = createComputer();
    let computerShipsArr = shipHelperFunctions.concatPlacementArr(
      computer.ships
    );
    let computerShipsArrString = computerShipsArr.map((ship) =>
      ship.toString()
    );

    for (let i = 0; i < computerShipsArrString.length; i++) {
      let shipCell = document.querySelector(
        `.${CSS.escape(computerShipsArrString[i])}`
      );
      shipCell.classList.add("active");
    }
  }

  return { createPlayerBoard, createCpuBoard };
})();

export { renderGameboards };

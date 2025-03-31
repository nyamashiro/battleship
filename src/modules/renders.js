import { shipHelperFunctions } from "./ship-helpers.js";

const renderGameboards = (function () {
  function createPlayerBoard(player) {
    const boardContainer = document.querySelector(".player-board");
    boardContainer.textContent = "";
    for (let y = 0; y < 10; y++) {
      let row = document.createElement("div");
      row.classList.add("row");
      for (let x = 0; x < 10; x++) {
        let cell = document.createElement("div");
        cell.classList.add("cell", "player", `${x},${y}`);
        row.appendChild(cell);
      }

      boardContainer.prepend(row);
    }
    placePlayerShips(player);
  }

  function createCpuBoard(computer) {
    const boardContainer = document.querySelector(".cpu-board");
    boardContainer.textContent = "";
    for (let y = 0; y < 10; y++) {
      let row = document.createElement("div");
      row.classList.add("row");

      for (let x = 0; x < 10; x++) {
        let cell = document.createElement("div");
        cell.classList.add("cell", "cpu");
        cell.id = `${x},${y}`;
        row.appendChild(cell);
      }

      boardContainer.prepend(row); // Prepend to ensure correct order
    }
    placeCpuShips(computer);
  }

  function placePlayerShips(player) {
    let playerShipsArr = shipHelperFunctions.concatPlacementArr(player.ships);
    let playerShipsArrString = playerShipsArr.map((ship) => ship.toString());

    for (let i = 0; i < playerShipsArrString.length; i++) {
      let shipCell = document.querySelector(
        `.${CSS.escape(playerShipsArrString[i])}`
      );
      shipCell.classList.add("ship", "active", "visible");
    }
  }

  function placeCpuShips(computer) {
    let computerShipsArr = shipHelperFunctions.concatPlacementArr(
      computer.ships
    );
    let computerShipsArrString = computerShipsArr.map((ship) =>
      ship.toString()
    );

    for (let i = 0; i < computerShipsArrString.length; i++) {
      let shipCell = document.querySelector(
        `[id="${computerShipsArrString[i]}"]`
      );
      shipCell.classList.add("ship", "active");
    }
  }

  return { createPlayerBoard, createCpuBoard };
})();

export { renderGameboards };

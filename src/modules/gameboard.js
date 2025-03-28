import { Ship } from "./ship.js";
import { gameboardHelperFunctions } from "./gameboard-helpers.js";
import { shipHelperFunctions } from "./ship-helpers.js";

class Gameboard {
  constructor(missed_shots = [], gameOver = false) {
    this.missed_shots = missed_shots;
    this.gameOver = gameOver;
  }

  placeShips() {
    const shipLengthsArr = [2, 3, 3, 4, 5];
    const placedShips = [];
    const ships = [];
    for (let i = 0; i < shipLengthsArr.length; i++) {
      let newShip = new Ship(shipLengthsArr[i]);
      newShip.placement = gameboardHelperFunctions.returnValidPlacements(
        shipLengthsArr[i],
        placedShips
      );
      newShip.placementSet = new Set(
        newShip.placement.map((points) => points.toString())
      );
      placedShips.push(newShip.placement);
      ships.push(newShip);
    }
    shipHelperFunctions.addShipId(ships);
    this.ships = ships;
  }
}

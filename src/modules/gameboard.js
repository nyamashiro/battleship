import { Ship } from "./ship.js";
import { helperFunctions } from "./helpers.js";

class Gameboard {
  constructor() {}

  placeShips() {
    const shipLengthsArr = [2, 3, 3, 4, 5];
    const placedShips = [];
    for (let i = 0; i < shipLengthsArr.length; i++) {
      let newShip = new Ship(shipLengthsArr[i]);
      newShip.placement = helperFunctions.returnValidPlacements(
        shipLengthsArr[i],
        placedShips
      );
      placedShips.push(newShip.placement);
    }
    return placedShips;
  }

  // receiveAttack(coordinates) {}
}

let gameboard = new Gameboard();

console.log(gameboard.placeShips());

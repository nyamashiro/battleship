import { Ship } from "./ship.js";
import { gameboardHelperFunctions } from "./gameboard-helpers.js";
import { shipHelperFunctions } from "./ship-helpers.js";

class Gameboard {
  constructor(missedShots = [], gameOver = false, hits = [], sunkShips = []) {
    this.missedShots = missedShots;
    this.gameOver = gameOver;
    this.hits = hits;
    this.sunkShips = sunkShips;
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

  receiveAttack(coordinates) {
    let concatHitSet = shipHelperFunctions.concatHitSet(this.hits);

    let missedShotsSet = new Set(
      this.missedShots.map((shots) => shots.toString())
    );

    if (missedShotsSet.has(coordinates.toString())) {
      //should run receiveAttack once more but with different coordinates
      // console.log("OOPS THIS SHOT IS A MISSED SHOT");
      return;
    }

    if (concatHitSet.has(coordinates.toString())) {
      //should run receiveAttack once more but with different coordinates
      // console.log("OOPS THIS SHOT ALREADY HIT");
      return;
    }

    let hit = false;
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].placementSet.has(coordinates.toString())) {
        this.ships[i].numOfHits += 1;
        this.hits.push(coordinates);
        this.ships[i].isSunk();
        if (this.ships[i].sunk) {
          this.sunkShips.push(this.ships[i].id);
          this.checkGameOver();
        }
        hit = true;
        return;
      }
    }
    if (!hit) {
      this.missedShots.push(coordinates);
    }
  }

  checkGameOver() {
    if (this.sunkShips.length === this.ships.length) {
      this.gameOver = true;
      console.log("GAME OVER!!!!");
      return;
    }
  }
}

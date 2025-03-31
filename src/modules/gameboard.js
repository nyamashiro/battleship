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

  createShips() {
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

    if (missedShotsSet.has(coordinates) || concatHitSet.has(coordinates)) {
      this.receiveAttack(gameboardHelperFunctions.getRandomCoordinates());
    }

    let hit = false;
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].placementSet.has(coordinates)) {
        this.ships[i].numOfHits += 1;
        this.hits.push(coordinates);
        this.ships[i].isSunk();
        if (this.ships[i].sunk) {
          this.sunkShips.push(this.ships[i].id);
        }
        hit = true;
        return "hit";
      }
    }
    if (!hit) {
      this.missedShots.push(coordinates);
      return "miss";
    }
  }

  checkGameOver() {
    if (this.sunkShips.length === this.ships.length) {
      this.gameOver = true;
      return true;
    }
  }
}

export { Gameboard };

// let gameboard = new Gameboard();
// gameboard.createShips();

// console.log(shipHelperFunctions.concatPlacementSet(gameboard.ships));

// console.dir(gameboard, { depth: null });

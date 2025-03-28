const gameboardHelperFunctions = (function () {
  function getRandomInt3AndUnder() {
    return Math.floor(Math.random() * 4);
  }

  function getRandomStartingPoint() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }

  function LtoRPlacement(length) {
    const leftToRight = [1, 0];
    let placement = [getRandomStartingPoint()];

    for (let i = 1; i < length; i++) {
      placement[i] = [
        placement[i - 1][0] + leftToRight[0],
        placement[i - 1][1] + leftToRight[1],
      ];
    }
    return placement;
  }

  function RToLPlacement(length) {
    const rightToLeft = [-1, 0];
    let placement = [getRandomStartingPoint()];

    for (let i = 1; i < length; i++) {
      placement[i] = [
        placement[i - 1][0] + rightToLeft[0],
        placement[i - 1][1] + rightToLeft[1],
      ];
    }
    return placement;
  }

  function DtoUPlacement(length) {
    const downToUp = [0, 1];
    let placement = [getRandomStartingPoint()];

    for (let i = 1; i < length; i++) {
      placement[i] = [
        placement[i - 1][0] + downToUp[0],
        placement[i - 1][1] + downToUp[1],
      ];
    }
    return placement;
  }

  function UtoDPlacement(length) {
    const upToDown = [0, -1];
    let placement = [getRandomStartingPoint()];

    for (let i = 1; i < length; i++) {
      placement[i] = [
        placement[i - 1][0] + upToDown[0],
        placement[i - 1][1] + upToDown[1],
      ];
    }
    return placement;
  }

  function returnPossiblePlacements(length) {
    const direction = getRandomInt3AndUnder();

    if (direction === 0) {
      return LtoRPlacement(length);
    } else if (direction === 1) {
      return RToLPlacement(length);
    } else if (direction === 2) {
      return DtoUPlacement(length);
    } else {
      return UtoDPlacement(length);
    }
  }

  function returnPlacementsWithinGrid(length) {
    let placements = returnPossiblePlacements(length);

    //checking if the initial placement of ships go beyond the 10x10 grid of the game board based on the starting position
    let invalid = placements.some((points) => {
      return points[0] > 9 || points[1] > 9 || points[0] < 0 || points[1] < 0;
    });

    if (invalid) {
      return returnPlacementsWithinGrid(length);
    } else return placements;
  }

  function returnValidPlacements(length, placedShips) {
    const placements = returnPlacementsWithinGrid(length);

    const placementsSet = new Set(placements.map((point) => point.toString()));

    if (placedShips.length > 0) {
      for (let i = 0; i < placedShips.length; i++) {
        const overlap = placedShips[i].some((point) => {
          return placementsSet.has(point.toString());
        });
        if (overlap) {
          return returnValidPlacements(length, placedShips);
        }
        //no else statement because I want it to iterate through every placedship. if i have an else and return the current placement, it will exit the loop early without
        //iterating through the whole placedShip array.
      }
    }
    return placements;
  }

  return { returnValidPlacements };
})();

export { gameboardHelperFunctions };

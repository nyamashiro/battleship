const helperFunctions = (function () {
  function getRandomInt() {
    return Math.floor(Math.random() * 4);
  }

  function returnPossiblePlacements(startPoint, length) {
    const leftToRight = [1, 0];
    const rightToLeft = [-1, 0];
    const downToUp = [0, 1];
    const upToDown = [0, -1];

    const direction = getRandomInt();
    let placement = [startPoint];

    if (direction === 0) {
      for (let i = 1; i < length; i++) {
        placement[i] = [
          placement[i - 1][0] + leftToRight[0],
          placement[i - 1][1] + leftToRight[1],
        ];
      }
    } else if (direction === 1) {
      for (let i = 1; i < length; i++) {
        placement[i] = [
          placement[i - 1][0] + rightToLeft[0],
          placement[i - 1][1] + rightToLeft[1],
        ];
      }
    } else if (direction === 2) {
      for (let i = 1; i < length; i++) {
        placement[i] = [
          placement[i - 1][0] + downToUp[0],
          placement[i - 1][1] + downToUp[1],
        ];
      }
    } else if (direction === 3) {
      for (let i = 1; i < length; i++) {
        placement[i] = [
          placement[i - 1][0] + upToDown[0],
          placement[i - 1][1] + upToDown[1],
        ];
      }
    }

    return placement;
  }

  function returnValidPlacements(startPoint, length) {
    let placements = returnPossiblePlacements(startPoint, length);

    let invalid = placements.some((points) => points[0] > 9 || points[1] > 9);

    if (invalid) {
      return returnValidPlacements(startPoint, length);
    } else return placements;
  }

  return { returnValidPlacements };
})();

export { helperFunctions };

const shipHelperFunctions = (function () {
  function addShipId(shipsArr) {
    for (let i = 0; i < shipsArr.length; i++) {
      shipsArr[i].id = i;
    }
  }

  function concatHitSet(hits) {
    const concatSet = new Set(hits.map((points) => points.toString()));
    return concatSet;
  }

  function concatPlacementSet(ships) {
    let placementArr = [];
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].placement.length; j++) {
        placementArr.push(ships[i].placement[j]);
      }
    }
    return new Set(placementArr.map((placement) => placement.toString()));
  }

  function concatPlacementArr(ships) {
    let placementArr = [];
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].placement.length; j++) {
        placementArr.push(ships[i].placement[j]);
      }
    }
    return placementArr;
  }

  return { addShipId, concatHitSet, concatPlacementSet, concatPlacementArr };
})();

export { shipHelperFunctions };

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

  return { addShipId, concatHitSet };
})();

export { shipHelperFunctions };

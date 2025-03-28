const shipHelperFunctions = (function () {
  function addShipId(shipsArr) {
    for (let i = 0; i < shipsArr.length; i++) {
      shipsArr[i].id = i;
    }
  }

  return { addShipId };
})();

export { shipHelperFunctions };

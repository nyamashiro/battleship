class Ship {
  constructor(length, numOfHits = 0, sunk = false) {
    this.length = length;
    this.numOfHits = numOfHits;
    this.sunk = sunk;
  }

  hit() {
    this.numOfHits += 1;
    return this.numOfHits;
  }

  isSunk() {
    return (this.sunk = this.numOfHits === this.length ? true : false);
  }
}

export { Ship };

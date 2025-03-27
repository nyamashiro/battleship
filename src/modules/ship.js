class Ship {
  constructor(length, num_of_hits = 0, sunk = false) {
    this.length = length;
    this.num_of_hits = num_of_hits;
    this.sunk = sunk;
  }

  hit() {
    this.num_of_hits += 1;
    return this.num_of_hits;
  }

  isSunk() {
    return (this.sunk = this.num_of_hits === this.length ? true : false);
  }
}

export { Ship };

import { Ship } from "../modules/ship";

test("creates ship object", () => {
  const newShip = new Ship(4);
  expect(newShip).toEqual({ length: 4, num_of_hits: 0, sunk: false });
});

test("hit function increases num_of_hits by 1", () => {
  const newShip = new Ship(4, 0, false);
  expect(newShip.hit()).toBe(1);
  expect(newShip.hit()).toBe(2);
});

test("ship is sunk when num_of_hits === length", () => {
  const newShip = new Ship(4, 0, false);
  newShip.hit();
  expect(newShip.isSunk()).toBe(false);
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
});

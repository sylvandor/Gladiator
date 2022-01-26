import Cube from "./cube.js";

export class Gladiator {
  constructor(startingPosition, facing) {
    this.coord = new Cube(startingPosition);
    this.facing = facing;
  }
}

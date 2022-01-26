import Cube from "../cube.js";

const DIRECTION = {
  0: [0, -1, 1],
  1: [1, -1, 0],
  2: [1, 0, -1],
  3: [0, 1, -1],
  4: [-1, 1, 0],
  5: [-1, 0, 1]
}

// Standard Actions
export const ACTIONS = {
  forward: gladiator => {
    gladiator.coord = move(gladiator.coord, gladiator.facing)
  },
  backward: gladiator => {
    gladiator.coord = move(gladiator.coord, (gladiator.facing + 3) % 6)
  },
  charge: gladiator => {
    gladiator.coord = move(gladiator.coord, gladiator.facing, 3);
  },
  fsl: gladiator => {
    gladiator.coord = move(gladiator.coord, (gladiator.facing + 5) % 6)
  },
  fsr: gladiator => {
    gladiator.coord = move(gladiator.coord, (gladiator.facing + 1) % 6)
  },
  bsl: gladiator => {
    gladiator.coord = move(gladiator.coord, (gladiator.facing + 4) % 6)
  },
  bsr: gladiator => {
    gladiator.coord = move(gladiator.coord, (gladiator.facing + 2) % 6)
  }
}

// Special Actions
export const SA = {
  left: gladiator => {
    gladiator.facing = (gladiator.facing + 6 - 1) % 6
  },
  right: gladiator => {
    gladiator.facing = (gladiator.facing + 1) % 6
  }
}

const move = (coord, dir, count = 1) => {
  const direction = DIRECTION[dir]

  return new Cube(
    [coord.q + (direction[0] * count),
      coord.r + (direction[1] * count),
      coord.s + (direction[2] * count)]
  )
}

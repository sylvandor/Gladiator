export const combat = gladiators => {
  findNeighbors(gladiators);
}

const findNeighbors = gladiators => {
  for (let i = 0; i < gladiators.length; i++) {
    for (let j = i + 1; j < gladiators.length; j++) {
      const are = areNeighbors(gladiators[i].coord, gladiators[j].coord);
      if (are) {
        console.log(i + 1, j + 1, gladiators[i].coord, gladiators[j].coord);
      }
    }
  }
}

const areNeighbors = (coord1, coord2) => {
  if (coord1.q === coord2.q) {
    return ((coord1.r + 1 === coord2.r && coord1.s - 1 === coord2.s) ||
      (coord1.r - 1 === coord2.r && coord1.s + 1 === coord2.s));
  } else if (coord1.r === coord2.r) {
    return ((coord1.q + 1 === coord2.q && coord1.s - 1 === coord2.s) ||
      (coord1.q - 1 === coord2.q && coord1.s + 1 === coord2.s));
  } else if (coord1.s === coord2.s) {
    return ((coord1.q + 1 === coord2.q && coord1.r - 1 === coord2.r) ||
      (coord1.q - 1 === coord2.q && coord1.r + 1 === coord2.r));
  } else {
    return false;
  }
}

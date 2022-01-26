import {STARTING_POSITIONS} from "./gladiator/setup/starting_positions.js";
import {ACTIONS, SA} from "./gladiator/game/movement.js";
import {clear, drawGladiator, drawGrid} from "./gladiator/grid.js";
import {roll} from "./gladiator/die.js";
import {LIGHT, MEDIUM, HEAVY} from "./gladiator/setup/armor.js";
import {TRAITS} from "./gladiator/setup/characteristics.js";
import {Gladiator} from "./gladiator/gladiator.js";
import {combat} from "./gladiator/game/combat.js";

const writeGladiator = gladiator => {
  const coord = gladiators[gladiator].coord
  writeText(`glad-coord-${gladiator}`, `(${coord.q}, ${coord.r}, ${coord.s})`);
  writeText(`glad-facing-${gladiator}`, gladiators[gladiator].facing);
};

export const writeText = (id, text) => document.getElementById(id).textContent = text || text === 0 ? text : '-';

document.getElementById('action-click').onclick = () => {
  const gladiator = document.getElementById('gladiator').value
  const action = document.getElementById('action').value

  ACTIONS[action](gladiators[gladiator]);
  combat(gladiators);
  drawMap();
};

document.getElementById('sa-click').onclick = () => {
  const gladiator = document.getElementById('gladiator').value
  const action = document.getElementById('special-action').value

  SA[action](gladiators[gladiator]);
  combat(gladiators);
  drawMap();
};

const writeArmor = set => {
  writeText('armor-head', set.head?.display);
  writeText('armor-chest', set.chest?.display);
  writeText('armor-groin', set.groin?.display);
  writeText('armor-arms', set.arms?.display);
  writeText('armor-legs', set.legs?.display);
};

document.getElementById('roll-armor').onclick = () => {
  const rolls = roll(1);
  switch (document.getElementById('type').value) {
    case 'light':
      writeArmor(LIGHT[rolls[0]]);
      break;
    case 'medium':
      writeArmor(MEDIUM[rolls[0]]);
      break;
    case 'heavy':
    default:
      writeArmor(HEAVY[rolls[0]]);
      break;
  }
};

document.getElementById('roll-traits').onclick = () => {
  const rolls = roll(2);
  const traits = TRAITS[rolls[0]][rolls[1]]
  writeText('tr', traits.tr);
  writeText('st', traits.st);
  writeText('ag', traits.ag);
  writeText('cf', traits.tr + traits.st + traits.ag);
  writeText('w', traits.w);
  writeText('con', traits.con);
  writeText('nf', traits.tr + traits.ag);
};

const drawMap = () => {
  clear();
  drawGrid();

  gladiators.forEach((gladiator, index) => {
    writeGladiator(index);
    drawGladiator(index + 1, gladiator.coord, gladiator.facing);
  })
};

const players = 4;
const gladiators = STARTING_POSITIONS[players].map(pos => new Gladiator(pos, 0))
drawMap();





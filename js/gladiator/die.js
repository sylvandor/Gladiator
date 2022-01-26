import {writeText} from "../main.js";

const rolld6 = () => Math.floor(Math.random() * 6) + 1;

document.getElementById('roll-1').onclick = () =>
  writeRolls([rolld6()]);

document.getElementById('roll-2').onclick = () =>
  writeRolls([rolld6(), rolld6()]);

document.getElementById('roll-3').onclick = () =>
  writeRolls([rolld6(), rolld6(), rolld6()]);

const writeRoll = (dieNumber, count) => {
  const die = document.getElementById(`die-${dieNumber}`);

  if (count) {
    die.textContent = count;
    die.style.display = "inline-block";
  } else {
    die.style.display = "none";
  }
}

const writeRolls = (rolls) => {
  writeRoll(1, rolls[0]);
  writeRoll(2, rolls[1]);
  writeRoll(3, rolls[2]);

  writeText('total-dice', rolls.reduce((a, b) => a + b));
}

export const roll = (count) => {
  const rolls = [...Array(count)].map(_ => rolld6())
  writeRolls(rolls);
  return rolls;
}


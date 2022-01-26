const ARMOR = {
  a: {display: 'A'},
  a5: {display: 'A5'},
  a6: {display: 'A6'},
  a7: {display: 'A7'},
  a8: {display: 'A8'},
  b7: {display: 'B7'},
  b8: {display: 'B8'},
  c: {display: 'C'},
  c6: {display: 'C6'},
  c7: {display: 'C7'},
  c8: {display: 'C8'},
}

const SHIELD = {
  large: {},
  small: {}
}

class ArmorSet {
  constructor(head, chest, groin, arms, legs, shield) {
    this.head = head;
    this.chest = chest;
    this.groin = groin;
    this.arms = arms;
    this.legs = legs;
    this.shield = shield;
  }
}

export const LIGHT = {
  1: new ArmorSet(ARMOR.a5, null, null, null, null, SHIELD.small),
  2: new ArmorSet(ARMOR.c6, null, null, null, null, SHIELD.small),
  3: new ArmorSet(null, null, ARMOR.c, null, null, SHIELD.large),
  4: new ArmorSet(null, null, null, null, null, SHIELD.small),
  5: new ArmorSet(null, null, null, null, null, SHIELD.small),
  6: new ArmorSet(ARMOR.a7, null, ARMOR.c, null, null, SHIELD.small),
}

export const MEDIUM = {
  1: new ArmorSet(ARMOR.a7, ARMOR.c, ARMOR.c, ARMOR.c8, ARMOR.c8, SHIELD.large),
  2: new ArmorSet(ARMOR.a8, ARMOR.b7, null, ARMOR.b7, ARMOR.a6, SHIELD.large),
  3: new ArmorSet(ARMOR.a, null, ARMOR.c, ARMOR.c8, ARMOR.a7, SHIELD.large),
  4: new ArmorSet(ARMOR.a, null, ARMOR.c, ARMOR.c, ARMOR.c8, SHIELD.large),
  5: new ArmorSet(ARMOR.a, ARMOR.c6, null, ARMOR.c7, ARMOR.b7, SHIELD.large),
  6: new ArmorSet(ARMOR.a, ARMOR.b8, null, ARMOR.b7, ARMOR.a7, SHIELD.large),
}

export const HEAVY = {
  1: new ArmorSet(ARMOR.a7, ARMOR.b8, ARMOR.c, ARMOR.b7, ARMOR.b7, SHIELD.large),
  2: new ArmorSet(ARMOR.a, ARMOR.b8, ARMOR.c, ARMOR.b7, ARMOR.b7, SHIELD.large),
  3: new ArmorSet(ARMOR.a, ARMOR.b7, ARMOR.c, ARMOR.b7, ARMOR.a8, SHIELD.large),
  4: new ArmorSet(ARMOR.a, ARMOR.b7, ARMOR.a5, ARMOR.b7, ARMOR.a7, SHIELD.large),
  5: new ArmorSet(ARMOR.a, ARMOR.b7, ARMOR.c, ARMOR.b7, ARMOR.a7, SHIELD.large),
  6: new ArmorSet(ARMOR.a, ARMOR.c7, ARMOR.c, ARMOR.b7, ARMOR.a7, SHIELD.large),
}

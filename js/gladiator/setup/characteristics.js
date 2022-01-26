class Traits {
  constructor(tr, st, ag, con, w) {
    this.tr = tr;
    this.st = st;
    this.ag = ag;
    this.con = con;
    this.w = w;
  }
}

export const TRAITS = {
  1: {
    1: new Traits(8, -2, 4, 4, 11),
    2: new Traits(7, 1, 3, 3, 12),
    3: new Traits(9, 0, 1, 3, 9),
    4: new Traits(8, 0, 1, 4, 11),
    5: new Traits(8, 1, 0, 4, 10),
    6: new Traits(7, -1, 4, 3, 12),
  },
  2: {
    1: new Traits(9, 0, 2, 3, 9),
    2: new Traits(9, 2, -1, 2, 10),
    3: new Traits(10, 1, -1, 2, 13),
    4: new Traits(8, 3, 0, 5, 11),
    5: new Traits(9, 2, 0, 6, 9),
    6: new Traits(11, 0, 0, 4, 9),
  },
  3: {
    1: new Traits(8, 1, 2, 3, 10),
    2: new Traits(9, 3, -1, 4, 14),
    3: new Traits(11, -2, 1, 3, 12),
    4: new Traits(7, 0, 3, 3, 11),
    5: new Traits(11, 1, 0, 4, 10),
    6: new Traits(8, 4, -1, 2, 9),
  },
  4: {
    1: new Traits(10, 3, -1, 4, 11),
    2: new Traits(12, -2, 1, 1, 13),
    3: new Traits(10, 3, -2, 4, 12),
    4: new Traits(7, 2, 1, 3, 11),
    5: new Traits(10, -1, 1, 4, 10),
    6: new Traits(13, 1, 0, 2, 13),
  },
  5: {
    1: new Traits(10, 2, -2, 5, 10),
    2: new Traits(13, 0, 0, 3, 10),
    3: new Traits(12, 1, 0, 3, 9),
    4: new Traits(9, 3, -1, 4, 9),
    5: new Traits(11, 0, 1, 3, 12),
    6: new Traits(10, 0, 3, 2, 15),
  },
  6: {
    1: new Traits(12, -1, 1, 2, 14),
    2: new Traits(12, 1, 0, 3, 9),
    3: new Traits(8, 5, -2, 5, 10),
    4: new Traits(10, -1, 2, 4, 14),
    5: new Traits(12, 2, -3, 3, 13),
    6: new Traits(7, 5, 1, 4, 13),
  },
}

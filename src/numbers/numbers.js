"use strict";
import { Num } from "./num.js";

export class Zero extends Num {
  constructor(display, row = "row5", id = "col0") {
    super("0", display, row, id);
  }
}

export class ZeroZero extends Num {
  constructor(display, row = "row5", id = "col1") {
    super("00", display, row, id);
  }
}

export class One extends Num {
  constructor(display, row = "row4", id = "col1") {
    super("1", display, row, id);
  }
}

export class Two extends Num {
  constructor(display, row = "row4", id = "col2") {
    super("2", display, row, id);
  }
}

export class Three extends Num {
  constructor(display, row = "row4", id = "col3") {
    super("3", display, row, id);
  }
}

export class Four extends Num {
  constructor(display, row = "row3", id = "col1") {
    super("4", display, row, id);
  }
}

export class Five extends Num {
  constructor(display, row = "row3", id = "col2") {
    super("5", display, row, id);
  }
}

export class Six extends Num {
  constructor(display, row = "row3", id = "col3") {
    super("6", display, row, id);
  }
}

export class Seven extends Num {
  constructor(display, row = "row2", id = "col1") {
    super("7", display, row, id);
  }
}

export class Eight extends Num {
  constructor(display, row = "row2", id = "col2") {
    super("8", display, row, id);
  }
}

export class Nine extends Num {
  constructor(display, row = "row2", id = "col3") {
    super("9", display, row, id);
  }
}

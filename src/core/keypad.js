"use strict";
import { GranTotal } from "../special-operations/gran-total.js";
import { Percentage } from "../arimethic-operations/percentage.js";
import { MarkUp } from "../special-operations/markup.js";
import { Off } from "../special-operations/off.js";
import { Mrc } from "../special-operations/mrc.js";
import { SubMemory } from "../special-operations/sub-memory.js";
import { AddMemory } from "../special-operations/add-memory.js";
import { Division } from "../arimethic-operations/division.js";
import { Sign } from "../special-operations/sign.js";
import {
  Zero,
  ZeroZero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
} from "../numbers/numbers.js";

import { Multiply } from "../arimethic-operations/multiplay.js";
import { BackSpace } from "../special-operations/backspace.js";
import { Subs } from "../arimethic-operations/substraction.js";
import { OnC } from "../special-operations/on-c.js";
import { Sum } from "../arimethic-operations/addition.js";
import { DecimalPoint } from "../special-operations/decimal-point.js";
import { EqualSign } from "../special-operations/equal.js";

export class Keypad {
  #buttons;
  #memory;
  #display;
  constructor(memory, display) {
    this.#memory = memory;
    this.#display = display;
    this.#initButtons();
  }
  #initButtons() {
    this.#buttons = {
      row0: {
        col2: new GranTotal(this.#memory, this.#display),
        col3: new Percentage(this.#memory, this.#display),
        col4: new MarkUp(this.#memory, this.#display),
      },
      row1: {
        col0: new Off(this.#memory, this.#display),
        col1: new Mrc(this.#memory, this.#display),
        col2: new SubMemory(this.#memory, this.#display),
        col3: new AddMemory(this.#memory, this.#display),
        col4: new Division(this.#memory, this.#display),
      },
      row2: {
        col0: new Sign(this.#display),
        col1: new Seven(this.#display),
        col2: new Eight(this.#display),
        col3: new Nine(this.#display),
        col4: new Multiply(this.#memory, this.#display),
      },
      row3: {
        col0: new BackSpace(this.#display),
        col1: new Four(this.#display),
        col2: new Five(this.#display),
        col3: new Six(this.#display),
        col4: new Subs(this.#memory, this.#display),
      },
      row4: {
        col0: new OnC(this.#memory, this.#display),
        col1: new One(this.#display),
        col2: new Two(this.#display),
        col3: new Three(this.#display),
        col4: new Sum(this.#memory, this.#display),
      },
      row5: {
        col0: new Zero(this.#display),
        col1: new ZeroZero(this.#display),
        col2: new DecimalPoint(this.#display),
        col3: new EqualSign(this.#memory, this.#display),
      },
    };
  }
}

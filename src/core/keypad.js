"use strict";
import { GranTotal } from "../buttons/special-operations/gran-total.js";
import { Percentage } from "../buttons/operators/arimethic-operations/percentage.js";
import { MarkUp } from "../buttons/operators/arimethic-operations/markup.js";
import { Off } from "../buttons/special-operations/off.js";
import { Mrc } from "../buttons/special-operations/mrc.js";
import { SubMemory } from "../buttons/special-operations/sub-memory.js";
import { AddMemory } from "../buttons/special-operations/add-memory.js";
import { Division } from "../buttons/operators/arimethic-operations/division.js";
import { Sign } from "../buttons/special-operations/sign.js";
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
} from "../buttons/numbers/numbers.js";
import { Multiply } from "../buttons/operators/arimethic-operations/multiplay.js";
import { BackSpace } from "../buttons/special-operations/backspace.js";
import { Subs } from "../buttons/operators/arimethic-operations/substraction.js";
import { OnC } from "../buttons/special-operations/on-c.js";
import { Sum } from "../buttons/operators/arimethic-operations/addition.js";
import { DecimalPoint } from "../buttons/special-operations/decimal-point.js";
import { EqualSign } from "../buttons/special-operations/equal.js";

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

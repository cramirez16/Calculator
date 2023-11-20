"use strict";
import { Operator } from "../operator.js";

export class Subs extends Operator {
  memory;
  constructor(memory, display, row = "row3", id = "col4") {
    super("-", memory, display, row, id);
    this.memory = memory;
  }
  static $function(memory, display) {
    return memory.num - Number(display.getDigits());
  }
}

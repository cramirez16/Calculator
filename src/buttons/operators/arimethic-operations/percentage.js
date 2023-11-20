"use strict";
import { Operator } from "../operator.js";

export class Percentage extends Operator {
  memory;
  constructor(memory, display, row = "row0", id = "col3") {
    super("%", memory, display, row, id);
    this.memory = memory;
  }
  static $function(memory, display) {
    return memory.num * (Number(display.getDigits()) / 100);
  }
}

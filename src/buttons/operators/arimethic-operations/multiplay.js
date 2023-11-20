"use strict";
import { Operator } from "../operator.js";

export class Multiply extends Operator {
  memory;
  constructor(memory, display, row = "row2", id = "col4") {
    super("X", memory, display, row, id);
    this.memory = memory;
  }
  static $function(memory, display) {
    const displayNumericValue = Number(display.getDigits());
    return displayNumericValue === null
      ? null
      : memory.num * displayNumericValue;
  }
}

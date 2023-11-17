"use strict";
import { Operator } from "../operator.js";

export class Division extends Operator {
  memory;
  constructor(memory, display, row = "row1", id = "col4") {
    super("÷", memory, display, row, id);
    this.memory = memory;
  }
  static $function(memory, display) {
    const displayNumericValue = Number(display.getDigits());
    return displayNumericValue === null || displayNumericValue === 0
      ? null
      : memory.num / displayNumericValue;
  }
}

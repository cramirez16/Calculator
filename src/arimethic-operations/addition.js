"use strict";
import { Operator } from "../operator.js";

export class Sum extends Operator {
  constructor(memory, display, row = "row4", id = "col4") {
    super("+", memory, display, row, id);
  }
  static $function(memory, display) {
    return memory.num + Number(display.getDigits());
  }
}

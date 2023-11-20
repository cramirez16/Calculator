"use strict";
import { Button } from "../button.js";

export class Operator extends Button {
  memory;
  operator;
  constructor(operator, memory, display, row = "row0", id = "col3") {
    super(operator, display, row, id);
    this.memory = memory;
    this.operator = operator;
  }
  // overriding callBack() method of parent class.
  callBack() {
    if (this.memory.num === null) {
      this.memory.num = Number(this.display.getDigits());
      this.display.setDigits("");
    }
    this.display.setOperation(this.operator);
  }
}

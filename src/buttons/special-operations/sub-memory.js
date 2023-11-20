"use strict";
import { Button } from "../button.js";

export class SubMemory extends Button {
  // substract to memory what is on the display and store the result in memory.
  memory;
  constructor(memory, display, row = "row1", id = "col2") {
    super("M-", display, row, id);
    this.memory = memory;
  }
  callBack() {
    this.display.setDigits(this.$function());
    this.display.setOperation("M-");
  }
  $function() {
    this.memory.mem -= Number(this.display.getDigits());
    return this.memory.mem.toString();
  }
}

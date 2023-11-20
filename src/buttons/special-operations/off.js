"use strict";
import { Button } from "../button.js";

export class Off extends Button {
  memory;
  display;
  constructor(memory, display, row = "row1", id = "col0") {
    super("OFF", display, row, id);
    this.memory = memory;
    this.display = display;
  }
  $function() {
    this.memory.num = null;
    this.memory.mem = 0;
    this.memory.grandTotal = 0;
    this.display.setOperation("");
    return "";
  }
}

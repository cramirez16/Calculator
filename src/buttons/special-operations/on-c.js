"use strict";
import { Button } from "../button.js";

export class OnC extends Button {
  memory;
  constructor(memory, display, row = "row4", id = "col0") {
    super("ON/C", display, row, id);
    this.memory = memory;
  }
  $function() {
    this.display.setOperation("");
    this.memory.num = null;
    return "0";
  }
}

"use strict";
import { Button } from "../button.js";

export class GranTotal extends Button {
  // Whenever the “=” Key has been pressed, the result will be stored into the Grand Total Memory!
  // The “GT” Key is to recall the Grand Total Memory!
  memory;
  constructor(memory, display, row = "row0", id = "col2") {
    super("GT", display, row, id);
    this.memory = memory;
  }
  $function() {
    return this.memory.grandTotal;
  }
}

"use strict";
import { Button } from "../button.js";

export class Mrc extends Button {
  // Memory Recall --> output what is stored in memory.
  memory;
  constructor(memory, display, row = "row1", id = "col1") {
    super("MRC", display, row, id);
    this.memory = memory;
  }
  $function() {
    return this.memory.mem.toString();
  }
}

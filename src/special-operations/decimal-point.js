"use strict";
import { Button } from "../button.js";

export class DecimalPoint extends Button {
  constructor(display, row = "row5", id = "col2") {
    super("·", display, row, id);
  }
  $function() {
    if (this.display.getDigits().includes(".")) return this.display.getDigits();
    return this.display.getDigits().length === 0
      ? "0."
      : `${this.display.getDigits()}.`;
  }
}

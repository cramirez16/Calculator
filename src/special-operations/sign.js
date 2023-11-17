"use strict";
import { Button } from "../button.js";

export class Sign extends Button {
  constructor(display, row = "row2", id = "col0") {
    super("±", display, row, id);
  }
  $function() {
    if (Number(this.display.getDigits()) === 0) return "0";
    return (-1 * Number(this.display.getDigits())).toString();
  }
}

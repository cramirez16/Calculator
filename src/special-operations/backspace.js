"use strict";

import { Button } from "../button.js";

export class BackSpace extends Button {
  constructor(display, row = "row3", id = "col0") {
    super("->", display, row, id);
  }
  $function() {
    const screen = this.display.getDigits();
    if (screen.length === 1) return "0";
    return screen.slice(0, screen.length - 1);
  }
}

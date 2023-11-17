"use strict";

import { Operator } from "../operator.js";

export class MarkUp extends Operator {
  memory;
  constructor(memory, display, row = "row0", id = "col4") {
    super("MU", memory, display, row, id);
    this.memory = memory;
  }
  static $function(memory, display) {
    // 120 [MU] 25 [%] result 160, [=] result 40
    // 120 is 75% of selling price,
    // selling price -> 160
    // profit -> 40
    const sellingPrice =
      (memory.num * 100) / (100 - Number(display.getDigits()));
    const profit = sellingPrice - memory.num;
    return { sellingPrice: sellingPrice, profit: profit };
  }
}

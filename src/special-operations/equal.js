"use strict";
import { Button } from "../button.js";
import { MarkUp } from "./markup.js";
import { Percentage } from "../arimethic-operations/percentage.js";
import { Division } from "../arimethic-operations/division.js";
import { Multiply } from "../arimethic-operations/multiplay.js";
import { Subs } from "../arimethic-operations/substraction.js";
import { Sum } from "../arimethic-operations/addition.js";

export class EqualSign extends Button {
  #memory;
  #display;
  constructor(memory, display, row = "row5", id = "col3") {
    super("=", display, row, id);
    this.#memory = memory;
    this.#display = display;
  }

  formatDisplay(val) {
    const anwser =
      Math.abs(val) > 999999999999 || Math.abs(val) < 0.00000000001
        ? "OVF"
        : val.toString();
    this.#memory.grandTotal = anwser !== "OVF" ? 0 : val;
    return anwser;
  }

  callBack() {
    const operation = this.#display.getOperation();
    if (!operation) return;
    this.#memory.grandTotal = this.$function(operation);
    this.#memory.num = null;
    this.#display.setDigits(this.#memory.grandTotal.toString());
    this.#display.setOperation("");
  }

  $function(operation) {
    let result;
    switch (operation) {
      case "%":
        return this.formatDisplay(
          Percentage.$function(this.#memory, this.#display)
        );
      case "MU":
        result = MarkUp.$function(this.#memory, this.#display);
        return `${this.formatDisplay(
          result.sellingPrice
        )}, ${this.formatDisplay(result.profit)}`;
      case "÷":
        result = Division.$function(this.#memory, this.#display);
        if (result === null) return "ERROR";
        return this.formatDisplay(result);
      case "X":
        result = Multiply.$function(this.#memory, this.#display);
        if (result === null) return "ERROR";
        return this.formatDisplay(result);
      case "-":
        result = Subs.$function(this.#memory, this.#display);
        if (result === null) return "ERROR";
        return this.formatDisplay(result);
      case "+":
        result = Sum.$function(this.#memory, this.#display);
        if (result === null) return "ERROR";
        return this.formatDisplay(result);
    }
  }
}

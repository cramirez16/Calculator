"use strict";
import { Footer } from "../../components/footer.js";
import { Display } from "./display.js";
import { Keypad } from "./keypad.js";
import { Memory } from "./memory.js";

export class CalculatorApp {
  memory;
  display;
  keypad;
  constructor() {
    this.memory = new Memory();
    this.display = new Display();
    this.display.setDigits("0");
    this.keypad = new Keypad(this.memory, this.display);
    Footer.Run();
  }
}

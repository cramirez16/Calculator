"use strict";

class Button {
  name;
  row;
  id;
  display;
  constructor(name, display, row, id) {
    this.name = name;
    this.row = row;
    this.id = id;
    this.display = display;
    this.addEvent();
  }
  callBack() {
    this.display.setDigits(this.$function());
  }
  addEvent() {
    document
      .querySelector(`#${this.row}>#${this.id}`)
      .addEventListener("click", this.callBack.bind(this));
  }
}

class Num extends Button {
  digit; // string
  constructor(digit, display, row, id) {
    super(digit, display, row, id);
    this.digit = digit;
  }
  // using callBack of parent class Button
  $function() {
    const displayString = this.display.getDigits();
    const displayNumericValue = Number(displayString);
    if (!displayString.endsWith(".")) {
      if (displayNumericValue === 0) return this.digit;
      if (this.#isTwelveDigits(displayString)) return displayString;
    }
    return `${displayString}${this.digit}`;
  }
  #isTwelveDigits(dispStr) {
    const screenSplited = dispStr.split("");
    const screenFiltered = screenSplited
      .filter((element) => !"+-.,".includes(element))
      .join("").length;
    return screenFiltered >= 12;
  }
}

class Operator extends Button {
  memory;
  operator;
  constructor(operator, memory, display, row = "row0", id = "col3") {
    super(operator, display, row, id);
    this.memory = memory;
    this.operator = operator;
  }
  // overriding callBack() method of parent class.
  callBack() {
    if (this.memory.num === null) {
      this.memory.num = Number(this.display.getDigits());
      this.display.setDigits("");
    }
    this.display.setOperation(this.operator);
  }
}

class GranTotal extends Button {
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

class Percentage extends Operator {
  memory;
  constructor(memory, display, row = "row0", id = "col3") {
    super("%", memory, display, row, id);
    this.memory = memory;
  }
  static $function(memory, display) {
    return memory.num * (Number(display.getDigits()) / 100);
  }
}

class MarkUp extends Operator {
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

class Off extends Button {
  memory;
  constructor(memory, display, row = "row1", id = "col0") {
    super("OFF", display, row, id);
    this.memory = memory;
  }
  $function() {
    this.memory.num = null;
    this.memory.mem = 0;
    this.memory.grandTotal = 0;
    return "";
  }
}

class Mrc extends Button {
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

class SubMemory extends Button {
  // substract to memory what is on the display and store the result in memory.
  memory;
  constructor(memory, display, row = "row1", id = "col2") {
    super("M-", display, row, id);
    this.memory = memory;
  }
  callBack() {
    this.display.setDigits(this.$function());
    this.display.setOperation("M-");
  }
  $function() {
    this.memory.mem -= Number(this.display.getDigits());
    return this.memory.mem.toString();
  }
}

class AddMemory extends Button {
  // Add to memory what is on the display and store the result in memory.
  memory;
  constructor(memory, display, row = "row1", id = "col3") {
    super("M+", display, row, id);
    this.memory = memory;
  }
  callBack() {
    this.display.setDigits(this.$function());
    this.display.setOperation("M+");
  }
  $function() {
    this.memory.mem += Number(this.display.getDigits());
    return this.memory.mem.toString();
  }
}

class Division extends Operator {
  memory;
  constructor(memory, display, row = "row1", id = "col4") {
    super("÷", memory, display, row, id);
    this.memory = memory;
  }
  static $function(memory, display) {
    const displayNumericValue = Number(display.getDigits());
    return displayNumericValue === null || displayNumericValue === 0
      ? null
      : memory.num / displayNumericValue;
  }
}

class Sign extends Button {
  constructor(display, row = "row2", id = "col0") {
    super("±", display, row, id);
  }
  $function() {
    if (Number(this.display.getDigits()) === 0) return "0";
    return (-1 * Number(this.display.getDigits())).toString();
  }
}

class Seven extends Num {
  constructor(display, row = "row2", id = "col1") {
    super("7", display, row, id);
  }
}

class Eight extends Num {
  constructor(display, row = "row2", id = "col2") {
    super("8", display, row, id);
  }
}

class Nine extends Num {
  constructor(display, row = "row2", id = "col3") {
    super("9", display, row, id);
  }
}

class Multiply extends Operator {
  memory;
  constructor(memory, display, row = "row2", id = "col4") {
    super("X", memory, display, row, id);
    this.memory = memory;
  }
  static $function(memory, display) {
    const displayNumericValue = Number(display.getDigits());
    return displayNumericValue === null
      ? null
      : memory.num * displayNumericValue;
  }
}

class BackSpace extends Button {
  constructor(display, row = "row3", id = "col0") {
    super("->", display, row, id);
  }
  $function() {
    const screen = this.display.getDigits();
    if (screen.length === 1) return "0";
    return screen.slice(0, screen.length - 1);
  }
}

class Four extends Num {
  constructor(display, row = "row3", id = "col1") {
    super("4", display, row, id);
  }
}

class Five extends Num {
  constructor(display, row = "row3", id = "col2") {
    super("5", display, row, id);
  }
}

class Six extends Num {
  constructor(display, row = "row3", id = "col3") {
    super("6", display, row, id);
  }
}

class Subs extends Operator {
  memory;
  constructor(memory, display, row = "row3", id = "col4") {
    super("-", memory, display, row, id);
    this.memory = memory;
  }
  static $function(memory, display) {
    return memory.num - Number(display.getDigits());
  }
}

class OnC extends Button {
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

class One extends Num {
  constructor(display, row = "row4", id = "col1") {
    super("1", display, row, id);
  }
}

class Two extends Num {
  constructor(display, row = "row4", id = "col2") {
    super("2", display, row, id);
  }
}

class Three extends Num {
  constructor(display, row = "row4", id = "col3") {
    super("3", display, row, id);
  }
}

class Sum extends Operator {
  constructor(memory, display, row = "row4", id = "col4") {
    super("+", memory, display, row, id);
  }
  static $function(memory, display) {
    return memory.num + Number(display.getDigits());
  }
}

class Zero extends Num {
  constructor(display, row = "row5", id = "col0") {
    super("0", display, row, id);
  }
}

class ZeroZero extends Num {
  constructor(display, row = "row5", id = "col1") {
    super("00", display, row, id);
  }
}

class DecimalPoint extends Button {
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

class EqualSign extends Button {
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

class Display {
  operation;
  digits;
  constructor() {
    this.operation = document.querySelector(
      ".display_screen>.inner_border>.operation"
    );
    this.digits = document.querySelector(
      ".display_screen>.inner_border>.digits"
    );
  }
  getOperation() {
    return this.operation.textContent;
  }
  setOperation(val) {
    this.operation.textContent = val;
  }
  getDigits() {
    return this.digits.textContent;
  }
  setDigits(val) {
    this.digits.textContent = this.#isTwelveDigits(val)
      ? this.#trunc(val)
      : val;
  }

  #isTwelveDigits(dispStr) {
    const screenSplited = dispStr.split("");
    const screenFiltered = screenSplited
      .filter((element) => !"+-.,".includes(element))
      .join("");
    return screenFiltered.length >= 12;
  }

  #trunc(val) {
    const result = [];
    let counter = 0;
    let index = 0;
    while (counter < 13 && index < val.length) {
      result.push(val[index]);
      index++;
      if (val[index] >= "0" || val[index] <= "9") {
        counter++;
      }
    }
    return result.join("");
  }
}

class Keypad {
  #buttons;
  #memory;
  #display;
  constructor(memory, display) {
    this.#memory = memory;
    this.#display = display;
    this.#initButtons();
  }
  #initButtons() {
    this.#buttons = {
      row0: {
        col2: new GranTotal(this.#memory, this.#display),
        col3: new Percentage(this.#memory, this.#display),
        col4: new MarkUp(this.#memory, this.#display),
      },
      row1: {
        col0: new Off(this.#memory, this.#display),
        col1: new Mrc(this.#memory, this.#display),
        col2: new SubMemory(this.#memory, this.#display),
        col3: new AddMemory(this.#memory, this.#display),
        col4: new Division(this.#memory, this.#display),
      },
      row2: {
        col0: new Sign(this.#display),
        col1: new Seven(this.#display),
        col2: new Eight(this.#display),
        col3: new Nine(this.#display),
        col4: new Multiply(this.#memory, this.#display),
      },
      row3: {
        col0: new BackSpace(this.#display),
        col1: new Four(this.#display),
        col2: new Five(this.#display),
        col3: new Six(this.#display),
        col4: new Subs(this.#memory, this.#display),
      },
      row4: {
        col0: new OnC(this.#memory, this.#display),
        col1: new One(this.#display),
        col2: new Two(this.#display),
        col3: new Three(this.#display),
        col4: new Sum(this.#memory, this.#display),
      },
      row5: {
        col0: new Zero(this.#display),
        col1: new ZeroZero(this.#display),
        col2: new DecimalPoint(this.#display),
        col3: new EqualSign(this.#memory, this.#display),
      },
    };
  }
}

class Memory {
  num = null;
  mem = 0;
  grandTotal = 0;
}

class Calculator {
  #buttons;
  #memory;
  #display;
  #keypad;
  constructor(display, memory, keypad) {
    this.#display = display;
    this.#display.setDigits("0");
    this.#keypad = keypad;
    this.#memory = memory;
    this.#updateFooter();
  }
  #updateFooter() {
    const footer = document.querySelector("footer");
    const paragraph = document.createElement("p");
    paragraph.textContent = `Copyright © ${new Date().getFullYear()} cramirez`;

    const anchor = document.createElement("a");
    anchor.setAttribute("href", "https://github.com/cramirez16");
    anchor.setAttribute("target", "_blank");

    const githubIcon = document.createElement("i");
    githubIcon.setAttribute("class", "fab fa-github");

    anchor.appendChild(githubIcon);
    footer.appendChild(paragraph);
    footer.appendChild(anchor);
  }
}

class CalculatorApp {
  static Run() {
    const memory = new Memory();
    const display = new Display();
    const keypad = new Keypad(memory, display);
    new Calculator(display, memory, keypad);
  }
}

CalculatorApp.Run();

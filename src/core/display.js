"use strict";

export class Display {
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

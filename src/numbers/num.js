"use strict";
import { Button } from "../button.js";

export class Num extends Button {
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
      if (displayNumericValue === 0)
        return this.digit === "00" ? "0" : this.digit;
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

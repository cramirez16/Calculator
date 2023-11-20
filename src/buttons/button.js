"use strict";
export class Button {
  name;
  row;
  id;
  display;
  constructor(name, display, row, id) {
    this.name = name;
    this.row = row;
    this.id = id;
    this.display = display;
  }
  callBack() {
    this.display.setDigits(this.$function());
  }
}

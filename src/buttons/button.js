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

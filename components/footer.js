"use strict";

export class Footer {
  static Run() {
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

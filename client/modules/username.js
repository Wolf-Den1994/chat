export class Username {
  constructor(selector) {
    this.node = document.querySelector(selector);
  }

  render = value => {
    this.node.textContent = value;
  }
}
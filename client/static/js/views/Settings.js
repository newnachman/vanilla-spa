import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
      <h1>Settings Page</h1>
      <p>
       Some settings
      </p>
      <p>
       Some settings
      </p>
      <p>
       Some settings
      </p>
    `
  }
}



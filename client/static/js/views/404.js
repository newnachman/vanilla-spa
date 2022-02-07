import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("404");
  }

  async getHtml() {
    return `
      <h1>OOPS, 404 Page!</h1>
      <p>
       We are sorry, page not found.
      </p>
      <div>
      <a href="/" data-link>GO BACK TO DASHBOARD PAGE</a>
      </div>
    `
  }
}



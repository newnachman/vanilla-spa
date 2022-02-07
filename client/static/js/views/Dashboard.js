import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <h1>Welcome back to DASHBOARD</h1>
      <p>
      This is a SPA (single page application) made without any front end framework / library.
      Only vanilla Javascript. The purpose of this demonstration is to have a deep understanding of how it works...
      In server side we have only some few line of code with node.js & express to create the running server & returning the entry point of the app (index.js document), from their, the routing & HTML is made by JS only.
      </p>

      <h2>Happy SPA !!!</h2>
    `
  }
}


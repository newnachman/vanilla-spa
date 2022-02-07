import fetchPost from "../lib/fetchPost.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Post Detailed " + params.id);
  }

  async getHtml() {

    const data = await fetchPost(this.params.id);

    if (data.error) {
      return `<h1>Sorry, problem with post number ${this.params.id}</h1>
        <h3>Cant find post. Please check URL and try again.</h3>
      `;
    }

    return `
      <h1>${data.title}</h1>
      <p>${data.body}<p>
      <div>
        <a href="/posts" data-link>View posts list</a>
      </div>
    `
  }
}


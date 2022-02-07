import fetchPost from "../lib/fetchPost.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {

    const data = await fetchPost();

    if (data.error) {
      return `<h1>Sorry, problem finding post list</h1>`;
    }

    let html = `<div>
    <h1>Posts List</h1>
   `
   data.forEach(post => {
     html += `
     <div id="${post.id}">
      <a href="/posts/${post.id}" data-link>
        Post number - ${post.id}
      </a>
      <p> 
        ${post.title}
      </p>
     </div>
     `;
   });

   html += `
    </div>
   `;

  return html;
    
  }
}



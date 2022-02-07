
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import NotFound from "./views/404.js";
import PostDetailed from "./views/PostDetailed.js";

const pathToRegex = path => RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }))
}

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {

  document.querySelector('#app').innerHTML = "Loading..."

  const routes = [
    {path: "/404", view: NotFound},
    {path: "/", view: Dashboard},
    {path: "/posts", view: Posts},
    {path: "/posts/:id", view: PostDetailed},
    {path: "/settings", view: Settings},
    // {path: "/posts", view: () => console.log("Viewing Posts")},
  ];

  // Test each route for potential match:
   const potentialMatches = routes.map(route => {
     return {
       route: route,
       result: location.pathname.match(pathToRegex(route.path)),
      //  isMatch: location.pathname === route.path,
     };
   });

   let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
  //  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    //  If no page found, set the page as 404:
   if (!match) {
     match = {
       route: routes[0],
       result: [location.pathname],
      //  isMatch: true,
     };
   }

   // Create instance of view object:
   const view = new match.route.view(getParams(match));

   // Insert the HTML:
   document.querySelector('#app').innerHTML = await view.getHtml();

  //  console.log(match.route.view());
  //  console.log(match);
  //  console.log(potentialMatches);
};  

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  })
  router();
})
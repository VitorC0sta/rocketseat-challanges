import { changePage } from "../pages-navigation/change-page.js";

export class Router {
  routes = {};

  addRoute(routeName, page, backgroundImage, bodyClass) {
    this.routes[routeName] = { 
      page: page,
      bgImg: backgroundImage,
      bodyClass: bodyClass,
    }
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    console.log(event.target);
    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const {pathname} = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route.page)
      .then( textPage => textPage.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html;
        document.body.style.background = `url(${route.bgImg}) lightgray 50% / cover no-repeat`;
        changePage(route.bodyClass);
      });
  }

}
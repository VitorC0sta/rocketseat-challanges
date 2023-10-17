export class Router {
  routes = {};

  addRoute(routeName, page, backgroundImage) {
    this.routes[routeName] = { page: page, bgImg: backgroundImage }
  }
}
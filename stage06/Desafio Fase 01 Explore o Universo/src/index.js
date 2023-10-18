import { Router } from "./router/router.js";
import "./pages-navigation/change-page.js";
const router = new Router();

router.addRoute("/","../pages/home.html","../assets/images/mountains-universe-1.png", 'home');
router.addRoute("/universe","../pages/universe.html","../assets/images/mountains-universe-2.png", 'universe');
router.addRoute("/exploration","../pages/exploration.html","../assets/images/mountains-universe-3.png", 'exploration');
router.addRoute(404,"../pages/404.html","../assets/images/mountains-universe-1.png", 'error');

router.handle();

window.handle = () => router.handle();
window.route = () => router.route();
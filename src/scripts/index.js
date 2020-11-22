import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./styles/style.css";
import App from "./views/app";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const app = new App({
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

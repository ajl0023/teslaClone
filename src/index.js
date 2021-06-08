
import "./main.scss";
import "./navbar/navbar";
import style from "./homepagecomp/homepage.module.scss";

import { renderHome } from "./homepagecomp/homepage";
import { renderNav } from "./navbar/navbar";
const docFrag = new DocumentFragment();
const body = document.createElement("div");
const wrapper = document.createElement("div");
wrapper.setAttribute("class", style["wrapper"]);
wrapper.setAttribute("id", "main-wrapper");
body.appendChild(wrapper);
body.setAttribute("id", "#root");
docFrag.appendChild(body);
renderNav(docFrag);
renderHome(docFrag);

document.body.appendChild(docFrag);

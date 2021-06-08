import styles from "./navbar.module.scss";
import logo from "./images/logo.svg";
const element = document.createElement("div");

export const renderNav = (fragment) => {
  element.innerHTML = /*html*/ `
  <div class=${styles["container"]}>
      <div class=${styles["content"]}>
        <div class=${styles["logo-container"]}>
          <img class=${styles["logo"]} src=${logo} alt="" />
        </div>
        <div class=${styles["item-container"]}>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
        </div>
        <div class=${styles["user-options-container"]}>
          <li>Shop</li>
          <li>Tesla Account</li>
        </div>
        <input
          type="checkbox"
          id="burger-trigger"
          class=${styles["burger-input"]}
        />
        <label for="burger-trigger" class=${styles["burger-label"]}>
          <span class=${styles["main-trigger-icon-container"]}>
            <i class=${styles["main-trigger-icon"]}></i>
          </span>
        </label>
        <div class=${styles["side-menu-container"]}>
          <ul class=${styles["side-menu-item-container"]}>
            <li>Existing Inventory</li>
            <li>Used Inventory</li>
            <li>Trade-In</li>
            <li>Cybertruck</li>
            <li>Roadster</li>
            <li>Semi</li>
            <li>Charging</li>
            <li>Powerwall</li>
            <li>Commercial Solar</li>
            <li>Test Drive</li>
            <li>Find Us</li>
            <li>Support</li>
            <li>Shop</li>
            <li class=${styles["additional-menu-items"]}>Model 3</li>
            <li class=${styles["additional-menu-items"]}>Model X</li>
            <li class=${styles["additional-menu-items"]}>Model Y</li>
            <li class=${styles["additional-menu-items"]}>Solar Roof</li>
            <li class=${styles["additional-menu-items"]}>Solar Panels</li>
            <li class=${styles["additional-menu-items"]}>Tesla Account</li>
          </ul>
        </div>
        <div class=${styles["header-mask"]}></div>
      </div>
    </div>
      
  `;

  const root = fragment.getElementById("main-wrapper");

  root.appendChild(element);
  let targetElement = fragment.querySelector(
    ["input"] + "." + styles["burger-input"]
  );

  const closeSideMenu = () => {
    if (targetElement.checked) {
      document.body.classList.add(styles["hide-scroll"]);
    } else {
      document.body.classList.remove(styles["hide-scroll"]);
    }

    targetElement.checked = false;
  };
  window.addEventListener("resize", closeSideMenu);

  const handleScroll = (e) => {
    if (targetElement.checked) {
      document.body.classList.add(styles["hide-scroll"]);
    } else {
      document.body.classList.remove(styles["hide-scroll"]);
    }
  };
  const mask = fragment.querySelector(["div"] + "." + styles["header-mask"]);
  mask.addEventListener("click", closeSideMenu);
  window.addEventListener("click", handleScroll);
};

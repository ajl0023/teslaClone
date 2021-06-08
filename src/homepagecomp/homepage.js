import style from "./homepage.module.scss";

const element = document.createElement("section");

export const renderHome = (fragment) => {
  element.innerHTML = /*html*/ `
 <div content-parent="" class=${style["page-content"]}>
        <p data-id="" class=${style["page-title"]}>
          Lowest Cost Solar Panels in America
        </p>
        <p section-id="" class=${style["page-text"]}>
          Money-back guarantee
        </p>
      </div>
      <div
        section-1=""
        section-content="Money-back guarantee"
        section="Lowest Cost Solar Panels in America"
        class=${style["landing-page-wrapper"]}
      >
        <div class=${style["button-container"]}>
          <button class=${style["order-button"]}>order now</button>
          <button class=${style["learn-more-button"]}>learn more</button>
        </div>
      </div>
      <div
        section-content="Starting at $69,420"
        section="Model S"
        class=${style["modelS-wrapper"]}
      ></div>
      <div
        section-content="Order Online for Touchless Delivery"
        section="Model 3"
        class=${style["model3-wrapper"]}
      ></div>
      <div
        section-content="Order Online for Touchless Delivery"
        section="Model X"
        class=${style["modelX-wrapper"]}
      ></div>
      <div
        section-content="Order Online for Touchless Delivery"
        section="Model Y"
        class=${style["modelY-wrapper"]}
      ></div>
      <div
        section-content="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        section="Solar for New Roofs"
        class=${style["solar-panel-wrapper"]}
      ></div>
      <div
        section="Accessories"
        class=${style["accessories-wrapper"]}
      ></div>
      ;
  `;

  const root = fragment.getElementById("main-wrapper");

  root.appendChild(element);

  class TrackContent {
    constructor() {
      this.scrollParent = fragment.querySelector(
        ["div"] + "." + style["wrapper"]
      );
      this.pages = fragment.querySelectorAll("[section]");
      this.currentPage;
      this.nodeListToArray = Array.from(this.pages);
      this.targetElement = fragment.querySelector("[data-id]");
      this.sectionContentElement = fragment.querySelector("[section-id]");
      this.buttonContainer = fragment.querySelector(
        ["div"] + "." + style["button-container"]
      );
      this.targetElementParent = fragment.querySelector("[content-parent]");
      this.inital = {
        ...this.handleScroll(),
      };
    }

    handleScroll() {
      let pagePositions = this.nodeListToArray.map((page) => {
        return {
          scrollTop:
            this.scrollParent.scrollTop - page.getBoundingClientRect().top,
          height: page.getBoundingClientRect().height,
          top: page.getBoundingClientRect().top,
          className: page.className,
          sectionContent: page.getAttribute("section-content"),
          content: page.getAttribute("section"),
          position: page.getBoundingClientRect().top,
        };
      });
      return pagePositions;
    }
    getAbs() {
      const abs = this.handleScroll().map((a) => {
        a.position = Math.abs(a.position);
        return a;
      });
      return abs;
    }
    getMin() {
      const min = Math.min.apply(
        Math,
        this.getAbs().map(function (page) {
          return page.position;
        })
      );
      return min;
    }
    findPage() {
      const min = this.getMin();
      let obj = this.getAbs().find(function (page) {
        return page.position === min;
      });
      return obj;
    }

    changeStyles() {
      this.currentPage = this.findPage();

      this.targetElementParent.style.opacity =
        (this.currentPage.height - 200 * 2.5 - Math.abs(this.currentPage.top)) /
        (this.currentPage.height - 200 * 2.5);
      this.buttonContainer.style.opacity =
        (this.currentPage.height - 200 * 2.5 - Math.abs(this.currentPage.top)) /
        (this.currentPage.height - 200 * 2.5);
      this.targetElement.innerHTML = this.currentPage.content;
      this.sectionContentElement.innerHTML = this.currentPage.sectionContent;
    }
  }
  const mainCall = new TrackContent();

  mainCall.scrollParent.addEventListener("scroll", function () {
    mainCall.changeStyles();
  });
};

// let scrollParent = fragment.querySelector(["div"] + "." + style["wrapper"]);
// let pages = fragment.querySelectorAll("[section]");
// let currentPage;
// let nodeListToArray = Array.from(pages);
// let targetElement = fragment.querySelector("[data-id]");
// let sectionContentElement = fragment.querySelector("[section-id]");
// let buttonContainer = fragment.querySelector(
//   ["div"] + "." + style["button-container"]
// );
// let targetElementParent = fragment.querySelector("[content-parent]");
// const handleScroll = (e) => {
//   let pagePositions = nodeListToArray.map((page) => {
//     return {
//       scrollTop: scrollParent.scrollTop - page.getBoundingClientRect().top,
//       height: page.getBoundingClientRect().height,
//       top: page.getBoundingClientRect().top,
//       className: page.className,
//       sectionContent: page.getAttribute("section-content"),
//       content: page.getAttribute("section"),
//       position: page.getBoundingClientRect().top,
//     };
//   });

//   let getAbs = pagePositions.map((a) => {
//     a.position = Math.abs(a.position);
//     return a;
//   });

//   var getMin = Math.min.apply(
//     Math,
//     getAbs.map(function (page) {
//       return page.position;
//     })
//   );

//   var obj = getAbs.find(function (page) {
//     return page.position === getMin;
//   });

//   currentPage = obj;
//   targetElementParent.style.opacity =
//     (currentPage.height - 200 * 2.5 - Math.abs(currentPage.top)) /
//     (currentPage.height - 200 * 2.5);

//   buttonContainer.style.opacity =
//     (currentPage.height - 200 * 2.5 - Math.abs(currentPage.top)) /
//     (currentPage.height - 200 * 2.5);
//   targetElement.innerHTML = currentPage.content;

//   sectionContentElement.innerHTML = currentPage.sectionContent;
//   return {
//     pages: pagePositions,
//     currentPage: currentPage,
//   };
// };

// window.addEventListener("scroll", handleScroll);

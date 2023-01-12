import { COLORS, buttonCSS } from "./button-constants.js";
import { isTargetButton } from "./utils.js";

export class Button extends HTMLElement {
  constructor() {
    super();

    this.shadowDOM = this.attachShadow({ mode: "open" });

    this.buttonElement = document.createElement("button");
    this.buttonElement.style.width = "81px";
    this.buttonElement.style.height = "36px";

    this.shadowDOM.appendChild(this.buttonElement);
  }

  connectedCallback() {
    let buttonStyle = document.createElement("style");

    this.buttonElement.appendChild(
      document.createTextNode(this.getAttribute("text") ?? "Default")
    );

    buttonStyle.innerHTML = buttonCSS;

    this.shadowDOM.appendChild(buttonStyle);

    if (this.hasAttribute("class")) {
      this.buttonElement.setAttribute("class", this.getAttribute("class"));
    }

    this.setColor();
    this.setDisableShadow();
    this.setDisabled();
    this.setVariant();
    this.setSize();
    this.setStartIcon();
    this.setEndIcon();
  }

  setVariant() {
    let buttonVariant = this.getAttribute("variant");

    if (this.hasAttribute("variant") && buttonVariant) {
      this.buttonElement.style.backgroundColor = COLORS["variant"];
      this.buttonElement.style.color = COLORS["variant_text"];
      this.buttonElement.style.boxShadow = "none";

      if (
        this.buttonElement.hasAttribute("class") &&
        this.buttonElement.getAttribute("class").includes("hover")
      ) {
        this.buttonElement.style.backgroundColor = COLORS["variant_hover"];
      } else {
        this.buttonElement.addEventListener("mouseover", (e) => {
          e.target.style.backgroundColor = COLORS["variant_hover"];
        });

        this.buttonElement.addEventListener("mouseleave", (e) => {
          e.target.style.backgroundColor = COLORS["variant"];
        });
      }
    }

    if (buttonVariant === "outline") {
      this.buttonElement.style.border = COLORS["border_color"];
    } else if (buttonVariant === "text") {
      this.buttonElement.style.border = "none";

      if (this.hasAttribute("disabled")) {
        this.buttonElement.style.color = COLORS["disabled_text"];
      }
    }
  }

  setDisableShadow() {
    if (!this.hasAttribute("disabledShadow")) return;

    this.buttonElement.style.boxShadow = "none";
  }

  setDisabled() {
    if (!this.hasAttribute("disabled")) return;

    this.buttonElement.disabled = true;
    this.buttonElement.textContent = "Disabled";
    this.buttonElement.style.boxShadow = "none";
    this.buttonElement.style.backgroundColor = COLORS["disabled"];
    this.buttonElement.style.color = COLORS["disabled_text"];
  }

  setStartIcon() {
    if (!this.hasAttribute("startIcon")) return;

    let iconName = this.getAttribute("startIcon");

    if (!iconName) return;

    let iconSpace = document.createElement("i");

    iconSpace.setAttribute("class", "material-symbols-outlined");
    iconSpace.textContent = " " + iconName;

    this.buttonElement.appendChild(iconSpace);

    this.buttonElement.setAttribute("class", "startIcon");
    this.buttonElement.style.width = "105px";
  }

  setEndIcon() {
    if (!this.hasAttribute("endIcon")) return;

    let iconName = this.getAttribute("endIcon");

    if (!iconName) return;

    let iconSpace = document.createElement("i");

    iconSpace.textContent = iconName;
    iconSpace.setAttribute("class", "material-symbols-outlined");

    this.buttonElement.appendChild(iconSpace);

    this.buttonElement.style.width = "105px";
    this.buttonElement.setAttribute("class", "endIcon");
  }

  setSize() {
    let sizeButton = this.getAttribute("size");

    if (sizeButton === "sm") {
      this.buttonElement.style.width = "73px";
      this.buttonElement.style.height = "32px";
    } else if (sizeButton === "lg") {
      this.buttonElement.style.width = "93px";
      this.buttonElement.style.height = "42px";
    }
  }

  setColor() {
    let buttonColor = this.getAttribute("color") || "default";
    let buttonShadow = "0px 2px 3px";

    this.buttonElement.style.backgroundColor = COLORS[buttonColor];
    this.buttonElement.style.color = COLORS[buttonColor + "_text"];

    this.buttonElement.style.boxShadow =
      buttonShadow + COLORS[buttonColor + "_shadow"];

    if (buttonColor === "secondary") this.buttonElement.style.width = "104px";

    if (buttonColor === "secondary" || buttonColor === "danger")
      this.buttonElement.textContent = `${buttonColor[0].toUpperCase()}${buttonColor.slice(
        1
      )}`;

    if (
      this.buttonElement.hasAttribute("class") &&
      this.buttonElement.getAttribute("class").includes("hover")
    ) {
      this.buttonElement.style.backgroundColor = COLORS[buttonColor + "_hover"];
      return;
    }

    this.buttonElement.addEventListener("mouseover", (e) => {
      if (!isTargetButton(e)) return;

      e.target.style.backgroundColor = COLORS[buttonColor + "_hover"];
    });

    this.buttonElement.addEventListener("mouseleave", (e) => {
      e.target.style.backgroundColor = COLORS[buttonColor];
    });
  }
}

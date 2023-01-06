const COLORS = {
    default: '#E0E0E0',
    default_text: '#3F3F3F7',
    default_hover: '#AEAEAE',
    primary: '#2962FF',
    primary_text:'#FFFFFF',
    primary_hover: '#0039CB',
    secondary: '#455A64',
    secondary_text: '#FFFFFF',
    secondary_hover: '#1C313A',
    danger: '#D32F2F',
    danger_text: '#FFFFFF',
    danger_hover: '#9A0007'
  }

class Button extends HTMLElement {

    constructor(){
        super();

        this.shadowDOM = this.attachShadow({mode: "open"});


        this.buttonElement = document.createElement("button");
        this.buttonElement.style.width = "81px";
        this.buttonElement.style.height = "36px";
        
        

        this.shadowDOM.appendChild(this.buttonElement);

    }

    connectedCallback() {

        this.buttonElement.appendChild(document.createTextNode(this.getAttribute("text") ?? "default"));

        let buttonStyle = document.createElement("style");

        buttonStyle.innerHTML = `
            button {
                font-family: "Noto Sans JP";
                font-size: 14px;
                width: 100px;
                height: 100px;
                border: none;
                border-radius: 6px;
            }`

        this.shadowDOM.appendChild(buttonStyle)

        if(this.hasAttribute("class")) {

            this.buttonElement.setAttribute("class", this.getAttribute("class"))

        }

        
        this.setVariant();
        this.setDisabled();
        this.setColor();

    }


    setVariant() {

        if(this.hasAttribute("variant") && this.getAttribute("variant") !== "") {
            
            console.log("Sirvio")

        }

    }

    setDisableShadow() {

    }

    setDisabled() {

        if(this.hasAttribute("disabled")) {

            console.log("sirvio x2", this.buttonElement)

            this.buttonElement.disabled = true;

            this.buttonElement.textContent = "Disabled";

            //this.buttonElement.appendChild(document.createTextNode("disabled"))

            
        }

    }

    setStartIcon() {

    }

    setEndIcon() {

    }

    setSize() {

    }

    setColor() {

        let buttonColor = this.getAttribute("color") || "default";

        this.buttonElement.style.backgroundColor = COLORS[buttonColor]
        this.buttonElement.style.color = COLORS[buttonColor + "_text"]

        this.buttonElement.textContent = `${buttonColor[0].toUpperCase()}${buttonColor.slice(1)}`;
        
        if(this.buttonElement.hasAttribute("class") && this.buttonElement.getAttribute("class").includes("hover")){ 

            this.buttonElement.style.backgroundColor = COLORS[buttonColor + "_hover"]

        } else {

        this.buttonElement.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = COLORS[buttonColor + "_hover"];
          })
          
          this.buttonElement.addEventListener('mouseleave', (e) => {
            e.target.style.backgroundColor = COLORS[buttonColor];
          })

        }
    }

    

}

customElements.define("my-button", Button);

 /*
        "text",
        "variant",
        "disabledShadow",
        "disabled",
        "startIcon",
        "endIcon",
        "size",
        "color"
        */
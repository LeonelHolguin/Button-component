const COLORS = {
    default: '#E0E0E0',
    default_text: '#3F3F3F7',
    default_hover: '#AEAEAE',
    default_shadow: 'rgba(51, 51, 51, 0.2)',
    primary: '#2962FF',
    primary_text:'#FFFFFF',
    primary_hover: '#0039CB',
    primary_shadow: 'rgba(41, 98, 255, 0.2)',
    secondary: '#455A64',
    secondary_text: '#FFFFFF',
    secondary_hover: '#1C313A',
    secondary_shadow: 'rgba(69, 90, 100, 0.2)',
    danger: '#D32F2F',
    danger_text: '#FFFFFF',
    danger_hover: '#9A0007',
    danger_shadow: 'rgba(211, 47, 47, 0.2)',
    border_color: '1px solid #3D5AFE',
    variant: '#FFFFFF',
    variant_text: '#3D5AFE',
    variant_hover: 'rgba(41, 98, 255, 0.1)',
    disabled: '#E0E0E0',
    disabled_text: '#9E9E9E'
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

        this.buttonElement.appendChild(document.createTextNode(this.getAttribute("text") ?? "Default"));

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

        this.setColor();
        this.setDisableShadow();
        this.setDisabled();
        this.setVariant();

    }


    setVariant() {

        let buttonVariant = this.getAttribute("variant");

        if(this.hasAttribute("variant") && buttonVariant !== "") {

            this.buttonElement.style.backgroundColor = COLORS["variant"];
            this.buttonElement.style.color = COLORS["variant_text"];
            this.buttonElement.style.boxShadow = "none";


            if(this.buttonElement.hasAttribute("class") && this.buttonElement.getAttribute("class").includes("hover")){ 

                this.buttonElement.style.backgroundColor = COLORS["variant_hover"];
    
            } else {
    
            this.buttonElement.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = COLORS["variant_hover"];;
              })
              
              this.buttonElement.addEventListener('mouseleave', (e) => {
                e.target.style.backgroundColor = COLORS["variant"];
              })
    
            }
        }
            
        if(buttonVariant === "outline") {
                
            this.buttonElement.style.border = COLORS["border_color"];

        } else if (buttonVariant === "text") {

            this.buttonElement.style.border = "none";

            if(this.hasAttribute("disabled")) {

                this.buttonElement.style.color = COLORS["disabled_text"];

            }

        }

    } 

    setDisableShadow() {

        if(this.hasAttribute("disabledShadow")) {

            this.buttonElement.style.boxShadow = "none";
        
        }

    }

    setDisabled() {

        if(this.hasAttribute("disabled")) {

            this.buttonElement.disabled = true;
            this.buttonElement.textContent = "Disabled";
            this.buttonElement.style.boxShadow = "none";
            this.buttonElement.style.backgroundColor = COLORS["disabled"];
            this.buttonElement.style.color = COLORS["disabled_text"];
            
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

        let buttonShadow = "0px 2px 3px ";

        this.buttonElement.style.backgroundColor = COLORS[buttonColor];
        this.buttonElement.style.color = COLORS[buttonColor + "_text"];
        
        this.buttonElement.style.boxShadow = buttonShadow + COLORS[buttonColor + "_shadow"];

        

        if(buttonColor === "secondary" || buttonColor === "danger") {

            this.buttonElement.textContent = `${buttonColor[0].toUpperCase()}${buttonColor.slice(1)}`;
        }


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
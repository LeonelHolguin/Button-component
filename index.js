class button extends HTMLElement {

    constructor(){
        super();

        this.shadowDOM = this.attachShadow({mode: "open"});


        this.buttonElement = document.createElement("button");
        this.buttonElement.style.width = "81px";
        this.buttonElement.style.height = "36px";
        
        

        this.shadowDOM.appendChild(this.buttonElement);

    }

    connectedCallback() {

        this.buttonElement.innerHTML = this.getAttribute("text");

        this.shadowDOM.innerHTML += `
        <style>
            button {
                width: 100px;
                height: 100px;
                color: red; 
            }
        </style>`
        
        this.setVariant();
        this.setDisabled();

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

            console.log("sirvio x2")

            this.buttonElement.createAttribute("disabled");

        }

    }

    setStartIcon() {

    }

    setEndIcon() {

    }

    setSize() {

    }

    setColor() {

    }

    

}

customElements.define("my-button", button);

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
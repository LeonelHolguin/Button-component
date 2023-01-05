class button extends HTMLElement {

    constructor(){
        super();

        let shadowDOM = this.attachShadow({mode: "open"});

        this.buttonElement = document.createElement("button");

        shadowDOM.appendChild(this.buttonElement);
    }

}
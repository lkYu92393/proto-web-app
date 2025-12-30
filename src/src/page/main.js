class MainPage extends HTMLElement {
    static observedAttributes = ["route"];

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 'MAIN TEST';
        this.setAttribute('route', '')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'route':
                if (!!newValue) {
                    this.innerHTML = `<${newValue}-component></${newValue}-component>`;
                }
                break;
        }
    }
}

export { MainPage };

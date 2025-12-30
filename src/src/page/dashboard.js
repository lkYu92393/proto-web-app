class DashboardPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<div>
        Under Construction
        </div>`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            default:
                break;
        }
    }
}

export { DashboardPage };

import './login.css';

class LoginPage extends HTMLElement {
    constructor() {
        super();
        this.setAttribute("warn", "");
    }

    connectedCallback() {
        this.innerHTML = `
        <div>
            <label for="username">Login ID</label>
            <input type="text" id="username" name="username" autocomplete="true" />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" autocomplete="false" />
        </div>
        <div>
            <button name="login">Login</button>
        </div>
        `;
        this.querySelector('button[name="login"]').addEventListener('click', () => {
            console.log('login');
        })
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            default:
                break;
        }
    }
}

export { LoginPage };

import { MainPage } from './main'
import { LoginPage } from './login'
import { DashboardPage } from './dashboard'

async function initPage() {
    customElements.define("main-app", MainPage)
    customElements.define("login-component", LoginPage)
    customElements.define("dashboard-component", DashboardPage)
}

export { initPage }
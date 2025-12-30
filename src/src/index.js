import { authState, initializeAuth, protectRoute } from './helper/auth';
import { initPage } from './page';
import './index.css';

document.addEventListener('DOMContentLoaded', async () => {
    await initPage();
    document.getElementById('app').innerHTML = `<main-app></main-app>`;
    await initializeAuth();

    const mainAppEle = document.querySelector('#app main-app');

    if (authState.isAuthenticated) {
        mainAppEle.setAttribute('route', 'dashboard')
    } else {
        mainAppEle.setAttribute('route', 'dashboard')
    }
})
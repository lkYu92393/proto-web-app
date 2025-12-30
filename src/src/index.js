import { authState, initializeAuth, protectRoute } from './auth';
import './assets/index.css';

document.addEventListener('DOMContentLoaded', async () => {
    await initializeAuth();

    if (authState.isAuthenticated) {

    } else {

    }
})
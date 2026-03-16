import { initializeAuth, protectRoute } from './helper/auth';
import './index.css';

const testImportDict = {
    'test': () => import('./pages/login-page.js')
}

document.addEventListener('DOMContentLoaded', async () => {
    await initializeAuth()


})
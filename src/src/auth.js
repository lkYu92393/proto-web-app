const API_BASE = '/api/auth';

const authState = {
    isAuthenticated: false,
    user: null,
    initialized: false // to avoid premature redirects
};

// Check current auth status on app startup
async function initializeAuth() {
    try {
        const res = await fetch(`${API_BASE}/status`, {
            credentials: 'include' // critical!
        });
        const data = await res.json();
        authState.isAuthenticated = data.isAuthenticated;
        authState.user = data.isAuthenticated ? { ...data.user } : null;
    } catch (e) {
        authState.isAuthenticated = false;
    } finally {
        authState.initialized = true;
    }
}

// Redirect based on route + auth state
function protectRoute(shouldRequireAuth = true) {
    if (!authState.initialized) return; // wait for init

    const isOnLoginPage = window.location.pathname === '/login';

    if (shouldRequireAuth && !authState.isAuthenticated) {
        if (!isOnLoginPage) window.location.href = '/login';
    } else if (!shouldRequireAuth && authState.isAuthenticated) {
        if (isOnLoginPage) window.location.href = '/dashboard'; // or main page
    }
}

export { authState, initializeAuth, protectRoute };
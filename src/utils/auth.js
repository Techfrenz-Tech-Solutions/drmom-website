const AUTH_STORAGE_KEY = "doctor_mom_2_user";

import { apiRequest } from "./api";

export const getStoredUser = () => {
    try {
        const raw = localStorage.getItem(AUTH_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (error) {
        return null;
    }
};

export const setStoredUser = (user) => {
    try {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        window.dispatchEvent(new Event("doctormom-auth-change"));
    } catch (error) {
        // ignore storage errors
    }
};

export const clearStoredUser = async (skipLogout = false) => {
    if (!skipLogout) {
        try {
            await apiRequest("/auth/logout", { method: "POST" });
        } catch (error) {
            // still clear local UI state if the session is already gone
        }
    }

    try {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        window.dispatchEvent(new Event("doctormom-auth-change"));
    } catch (error) {
        // ignore storage errors
    }
};

export const loginUser = async ({ email, password }) => {
    const data = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });
    setStoredUser(data.user);
    return data.user;
};

export const registerUser = async ({ name, email, password, gradeLabel }) => {
    const data = await apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password, gradeLabel }),
    });
    setStoredUser(data.user);
    return data.user;
};

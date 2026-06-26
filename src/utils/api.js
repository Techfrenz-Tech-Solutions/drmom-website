// In development, Vite proxies /api → http://106.51.20.225:28100/api (see vite.config.js)
// In production, set VITE_API_BASE_URL to your deployed backend URL
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

let _refreshing = null;

async function _refresh() {
  const res = await fetch(`${API_BASE_URL}/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Session expired");
}

export async function apiRequest(path, options = {}, _retry = false) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (response.status === 401) {
    if (!_retry) {
      try {
        if (!_refreshing) _refreshing = _refresh().finally(() => { _refreshing = null; });
        await _refreshing;
        return apiRequest(path, options, true);
      } catch {
        // refresh failed — fall through to redirect
      }
    }
    const { clearStoredUser } = await import("./auth");
    await clearStoredUser(true);
    window.location.href = "/login";
    return new Promise(() => {});
  }

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export const getCatalog = () => apiRequest("/catalog");

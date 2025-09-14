export const AUTH_TOKEN_KEY = 'token';
export const getToken = () => localStorage.getItem(AUTH_TOKEN_KEY);
export const setToken = (token) => {
  if (token) localStorage.setItem(AUTH_TOKEN_KEY, token);
  else localStorage.removeItem(AUTH_TOKEN_KEY);
  window.dispatchEvent(new Event('auth:changed'));
};
export const isAuthenticated = () => !!getToken();

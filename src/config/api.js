/**
 * Dynamic API configuration extracted from Vite environment variables (.env / process env)
 * Vite automatically loads variables prefixed with VITE_ from .env files or platform env settings.
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

/**
 * Utility helper to build full API endpoint URLs dynamically
 * @param {string} endpoint - Path, e.g. '/api/health' or 'api/user'
 * @returns {string} Full URL, e.g. 'https://my-backend.onrender.com/api/health'
 */
export const getApiUrl = (endpoint = '') => {
  const base = API_BASE_URL.replace(/\/$/, '');
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${base}${path}`;
};

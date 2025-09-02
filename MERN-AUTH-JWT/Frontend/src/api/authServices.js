import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});

export const register = (data) => API.post('/register', data);
export const login = (data) => API.post('/login', data);
export const logout = () => API.post('/logout');
export const refresh = () => API.get('/refresh');
export const profile = (token) => API.get('/profile', {
  headers: { Authorization: `Bearer ${token}`},
});

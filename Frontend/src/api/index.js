import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000',
    withCredentials: true,  // Ensure credentials (cookies) are sent with requests
});

API.interceptors.request.use((req) => {
    const token = Cookies.get('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;

require('dotenv').config();
const axios = require('axios');

// Create an Axios instance with default configurations
const apiClient = axios.create({
    baseURL: process.env.AI_API, // Default base URL
    headers: {
        Accept: 'application/json',
        Authorization: `Basic ${process.env.AI_OAUTH}`, // Default Authorization header
        'Content-Type': 'application/json', // Default Content-Type
    },
});

// Add a request interceptor (Optional)
apiClient.interceptors.request.use(
    (config) => {
        console.log(`Making request to: ${config.baseURL}${config.url}`);
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Add a response interceptor (Optional)
apiClient.interceptors.response.use(
    (response) => {
        return response.data; // Automatically return the response data
    },
    (error) => {
        console.error('Response error:', error.response?.data || error.message);
        return Promise.reject(error.response?.data || error.message);
    }
);

module.exports = apiClient;

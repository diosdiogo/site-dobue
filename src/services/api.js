import axios from "axios"

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});
api.interceptors.request.use(async config => {
    config.headers.get = { 'Content-Type': 'application/json' };
    return config;
});

export default api;
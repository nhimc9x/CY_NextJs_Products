import axios from 'axios';
import { getCookie} from "cookies-next";

const API_URL = 'http://152.42.240.131/api/v1'
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(function (config) {
    const token = getCookie('token')
    console.log('token: ', token)
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance;

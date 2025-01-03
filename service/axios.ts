import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MUSIC_API_ENDPOINT,
    timeout: 10000,
    withCredentials: true
})

instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default instance;
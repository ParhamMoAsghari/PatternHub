import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInterceptor = axios.create();

axiosInterceptor.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token');
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInterceptor;

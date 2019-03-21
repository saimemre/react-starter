import axios from 'axios';

const baseURL = 'http://www.clashapi.xyz/api/'; // prod
const timeout = 10000;

const instance = axios.create({
  baseURL,
  timeout
});

//instance.defaults.headers.common.Authorization = 'Bearer';
//instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.timeout = timeout;

// Interceptor example for refresh token logic

instance.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  error => Promise.reject(error)
  ,
);

// RESPONSE INTERCEPTOR
instance.interceptors.response.use(
  response => response,
  (error) => {
    // Do something with request error
    const originalRequest = error.config;

    // If response exist (request not time out)
    if (error.response) {
      console.log(error.response);
    }

    return Promise.reject(error);
  },
);

export default instance;

export function setToken(token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

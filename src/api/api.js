import axios from 'axios';
import { message } from 'antd';

const isDev = process.env.NODE_ENV === 'development';
const defaultHeader = {
  Accept: 'application/json',
  'Content-type': 'application/json'
}

export const $http = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: defaultHeader,
  withCredentials: true
})

$http.interceptors.request.use((config) => {
  return config;
})

$http.interceptors.response.use((response) => {
  if (response.status < 400) {
    return response.data;
  } else {
    message.error(response.data.message);
  }
})


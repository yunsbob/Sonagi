import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fileInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export { instance, fileInstance };

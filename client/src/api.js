import axios from "axios";

const port = 5000;

const api = axios.create({
  //if use docker baseURL: `http://192.168.99.100:${port}/api`
  //else baseURL: `http://localhost:${port}/api`
  baseURL: `http://localhost:${port}/api`
});


export const getCh1 = () => api.get(`/ch1`);
export const getCh2 = () => api.get(`/ch2`);
export const getCh3 = () => api.get(`/ch3`);
export const getCh4 = () => api.get(`/ch4`);
export const getCh5 = () => api.get(`/ch5`);
export const getCh6 = () => api.get(`/ch6`);

const apis = {
  getCh1,
  getCh2,
  getCh3,
  getCh4,
  getCh5,
  getCh6
};

export default apis;

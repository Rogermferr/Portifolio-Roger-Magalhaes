import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/users',
  timeout: 20000,
});

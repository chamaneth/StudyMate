import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080' // change from 5000 to 8080
});

export default api;

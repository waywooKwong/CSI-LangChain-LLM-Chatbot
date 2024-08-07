// src/axios.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://10.22.0.130:8000', // 后端服务地址
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

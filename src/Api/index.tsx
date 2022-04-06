import axios from 'axios';

const URL_API_BACKEND = "http://localhost:5000";

export const Api = axios.create({
    baseURL: URL_API_BACKEND,
    headers: { "Content-type": "application/json" }
})
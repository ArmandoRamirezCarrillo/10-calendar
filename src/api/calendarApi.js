import axios from 'axios';
import { getEnvVariables } from '../helpers';

const {VITE_API_URL} = getEnvVariables();

const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

// todo configurar interceptores

export default calendarApi;

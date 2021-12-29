import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

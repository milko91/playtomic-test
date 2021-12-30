import { api, API_KEY } from './api';

export interface IWeatherData {
  city: string;
  temperature: number;
}

export interface IWeatherResponse {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const mapResponseData = (data: IWeatherResponse): IWeatherData => ({
  city: data.name,
  temperature: data.main.temp,
});

export const getWeatherForCity = async (city: string): Promise<IWeatherData | null> => {
  try {
    const response = await api.get(`/weather?q=${city}&units=metric&appid=${API_KEY}`);
    if (response.status === 200) {
      return mapResponseData(response.data);
    }

    return null;
    // TODO show notification
  } catch (error) {
    return null;
    // TODO show notification
  }
};

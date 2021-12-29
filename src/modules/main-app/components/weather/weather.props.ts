import { IWeatherData } from '../../services/weather';

export interface IWeatherProps {
  title: string;
  data: IWeatherData;
}

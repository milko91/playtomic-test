import { FC, useEffect, useState } from 'react';

import { Weather } from '../../components';
import { getWeatherForCity, IWeatherData } from '../../services/weather';

export const Dashboard: FC = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  const fetchWeatherData = async () => {
    const data = await getWeatherForCity('Madrid');
    if (!data) {
      return;
    }
    setWeatherData(data);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return <Weather title="Dashboard" data={weatherData as IWeatherData} />;
};

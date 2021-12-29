import { FC, useEffect, useState } from 'react';

import { Weather } from '../../components';
import { getWeatherForCity, IWeatherData } from '../../services/weather';

export const Settings: FC = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  const fetchWeatherData = async () => {
    const data = await getWeatherForCity('Banja Luka');
    if (!data) {
      return;
    }
    setWeatherData(data);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return <Weather title="Settings" data={weatherData as IWeatherData} />;
};

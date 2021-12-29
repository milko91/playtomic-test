import { FC } from 'react';

import { IWeatherProps } from './weather.props';

export const Weather: FC<IWeatherProps> = ({ title, data }) => {
  return (
    <>
      <h3>{title}</h3>
      {data && data.city && (
        <div>
          <span>City: </span>
          <span>{data.city}</span>
        </div>
      )}
      {data && data.temperature && (
        <div>
          <span>Temperature: </span>
          <span>
            {data.temperature}
            <span>&deg;C</span>
          </span>
        </div>
      )}
    </>
  );
};

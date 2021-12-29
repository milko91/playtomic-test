import React from 'react';
import { render, screen } from '@testing-library/react';
import { Weather } from '../Weather';

test('renders Weather component with temperature of 10 degrees in Belgrade', () => {
  render(<Weather title="Weather Test" city="Belgrade" temperature={10} />);

  const city = screen.getByText('Belgrade');
  const temperature = screen.getByText('10');

  expect(city).toBeInTheDocument();
  expect(temperature).toBeInTheDocument();
});

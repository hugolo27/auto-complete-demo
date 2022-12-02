import React from 'react';
import {act, render, screen} from '@testing-library/react';
import App from './App';

test('App should render the title', async() => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act( async () => render(<App/>));
  const titleElement = screen.getByTestId(/title/i);
  expect(titleElement).toBeDefined();
});

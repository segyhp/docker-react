import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders learn react link', () => {
  const { getByText } = render(<Card />);
  const linkElement = getByText(/Robot Card/i);
  expect(linkElement).toBeInTheDocument();
});

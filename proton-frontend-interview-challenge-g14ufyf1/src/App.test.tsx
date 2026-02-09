import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { App } from './App';

test('Renders <h1>', () => {
  render(<App />);
  expect(screen.getByText('My Form')).toBeInTheDocument();
});

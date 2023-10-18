import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a piece of text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Santa Monica/i);
  expect(linkElement).toBeInTheDocument();
});

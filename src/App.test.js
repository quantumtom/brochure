import { render, screen } from '@testing-library/react';
import App from './App';

test('renders socktan link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Socktan Digital/i);
  expect(linkElement).toBeInTheDocument();
});

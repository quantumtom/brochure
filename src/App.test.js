import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a piece of text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Socktan Digital/i);
  expect(linkElement).toBeInTheDocument();
});

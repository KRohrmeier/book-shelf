import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const title = screen.getByText("Book S(h)elf");
  expect(title).toBeInTheDocument();
});

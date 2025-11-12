import { renderWithRouter, screen } from '../test-utils.js';
import App from '../App';

test('shows Shop navigation links', async () => {
  renderWithRouter(<App />, { route: '/' });
  const shopLinks = screen.getAllByRole('link', { name: /shop/i });
  expect(shopLinks.length).toBeGreaterThan(0);
});
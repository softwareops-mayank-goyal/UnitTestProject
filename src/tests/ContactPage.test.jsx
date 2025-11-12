import React from 'react';
// Use the real react-router-dom for this suite so MemoryRouter/Routes work
jest.mock('react-router-dom', () => jest.requireActual('react-router-dom'));
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import userEvent from '@testing-library/user-event';
import { CartProvider } from '../context/CartContext';

function renderWithRoutes(initialRoute = '/contact') {
  return render(
    <CartProvider>
      <MemoryRouter initialEntries={[initialRoute]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MemoryRouter>
    </CartProvider>
  );
}

test('renders Contact page and it is visible', () => {
  renderWithRoutes('/contact');
  expect(screen.getByText(/contact - bain office/i)).toBeInTheDocument();
});

test('Contact page contains office address text', () => {
  renderWithRoutes('/contact');
  expect(screen.getByText(/bain & company, dlf cyber city, gurugram/i)).toBeInTheDocument();
});

test('Contact page shows phone number', () => {
  renderWithRoutes('/contact');
  expect(screen.getByText(/phone:\s*\+91 124 613 5000/i)).toBeInTheDocument();
});

test('has a Back to Home link and navigates to Home when clicked', async () => {
  renderWithRoutes('/contact');
  const user = userEvent.setup();
  const backLink = screen.getByRole('link', { name: /back to home/i });
  expect(backLink).toBeInTheDocument();
  await user.click(backLink);
  expect(screen.getByText(/welcome,\s*bainie/i)).toBeInTheDocument();
});



import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';



//test case for app title
test('renders app title', () => {
  render(<App />);
  const titleElements = screen.getAllByText(/capital shop/i);
  expect(titleElements.length).toBeGreaterThan(0);
});

//test case for welcome message
test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome,\s*bainie/i);
  expect(welcomeElement).toBeInTheDocument();
});

//test case for points balance
test('renders points balance', () => {
  render(<App />);
  const pointsElement = screen.getByText(/your points balance/i);
  expect(pointsElement).toBeInTheDocument();
});

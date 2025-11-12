import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RedemptionPage from './pages/RedemptionPage';
import TestingPage from './pages/TestingPage';
import ShopPage from './pages/ShopPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import ContactPage from './pages/ContactPage';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#ff4081' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/redeem" element={<RedemptionPage />} />
            <Route path="/testing" element={<TestingPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

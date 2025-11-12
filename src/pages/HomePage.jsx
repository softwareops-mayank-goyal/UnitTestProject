import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  AppBar,
  Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { user, products } from '../data/mockData';

const HomePage = () => {
  const { cartItems, addToCart } = useCart();
  const [visibleCount, setVisibleCount] = useState(6);
  return (
    <Box>
      {/* Fixed Navigation Bar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#2c3e50', py: 1 }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Capital Shop
          </Typography>
          <Typography sx={{ mr: 3 }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </Typography>
          <Typography sx={{ mr: 3 }}>
            <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link>
          </Typography>
          <Typography sx={{ mr: 3 }}>
            <Link to="/men" style={{ color: 'white', textDecoration: 'none' }}>Men</Link>
          </Typography>
          <Typography sx={{ mr: 3 }}>
            <Link to="/women" style={{ color: 'white', textDecoration: 'none' }}>Women</Link>
          </Typography>
          <Typography>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          </Typography>
          <Typography sx={{ ml: 2 }}>
            <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart ({cartItems.length})</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(https://via.placeholder.com/1200x300.png?text=Fashion+Sale)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          color: 'white',
          py: 5, // Reduced padding
           // Account for fixed header height
            }}
                >
            <Typography variant="h6" sx={{ mb: 2, color: 'black' }}>
              Discover the latest trends and elevate your style.
            </Typography>
                </Box>

                {/* User Points and Buttons Section */}
      <Container maxWidth="lg" sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Your Points Balance: <strong>{user.points}</strong>
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Link to="/shop" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <Button variant="contained" color="primary" size="large">
              Shop Now
            </Button>
          </Link>
          <Link to="/redeem" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="primary" size="large">
              Redeem Points
            </Button>
          </Link>
        </Box>
      </Container>

      {/* Product Section */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Trending Products
        </Typography>
        <Grid container spacing={4}>
          {products.slice(0, visibleCount).map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    ${product.price}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button variant="outlined" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        {visibleCount < products.length && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setVisibleCount(Math.min(visibleCount + 6, products.length))}
            >
              Load More
            </Button>
          </Box>
        )}
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#2c3e50',
          color: 'white',
          textAlign: 'center',
          py: 2,
          mt: 5,
        }}
      >
        <Typography variant="body2">
          &copy; 2025 Capital Shop. All rights reserved.
        </Typography>
      </Box>
      
    </Box>
  );
};

export default HomePage;

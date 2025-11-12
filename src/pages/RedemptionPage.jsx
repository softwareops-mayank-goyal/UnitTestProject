import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Container,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  AppBar,
  Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { user } from '../data/mockData';

const RedemptionPage = () => {
  const [points, setPoints] = useState(user.points);
  const [input, setInput] = useState('');
  const [discount, setDiscount] = useState(0);

  // Mock cart data (example of selected products)
  const cart = [
    { id: 1, name: 'Classic Denim Jacket', price: 120, image: require('../assets/denim-jacket.jpg' )},
    { id: 2, name: 'Stylish Backpack', price: 75, image: require('../assets/backpack.jpg') },
    { id: 3, name: 'Minimalist Sneakers', price: 100, image: require('../assets/sneakers.jpg' )},
  ];

  // Calculate cart total price
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  // Handle Points Redemption
  const handleRedemption = () => {
    const pointsToRedeem = parseInt(input, 10);

    // Calculate discount and update points (no error handling for invalid input)
    const discountAmount = pointsToRedeem * 0.1; // 1 point = $0.1
    setDiscount(discountAmount);
    setPoints(points - pointsToRedeem); // Deduct redeemed points (even if invalid)
  };

  return (
    <Box>
      {/* Fixed Navigation Bar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#2c3e50', py: 1 }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Capital Shop
          </Typography>
          <Typography sx={{ mr: 3 }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </Link>
          </Typography>
          <Typography sx={{ mr: 3 }}>
            <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>
              Shop
            </Link>
          </Typography>
          <Typography sx={{ mr: 3 }}>
            <Link to="/men" style={{ color: 'white', textDecoration: 'none' }}>
              Men
            </Link>
          </Typography>
          <Typography sx={{ mr: 3 }}>
            <Link to="/women" style={{ color: 'white', textDecoration: 'none' }}>
              Women
            </Link>
          </Typography>
          <Typography>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={4}>
          {/* Cart Section */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Your Cart
                </Typography>
                <List>
                  {cart.map((item) => (
                    <ListItem key={item.id}>
                      <ListItemAvatar>
                        <Avatar
                          src={item.image}
                          alt={item.name}
                          variant="square"
                          sx={{ width: 60, height: 60 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name}
                        secondary={`Price: $${item.price}`}
                        sx={{ ml: 2 }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Total: <strong>${cartTotal.toFixed(2)}</strong>
                </Typography>
                {discount > 0 && (
                  <Typography variant="h6" color="primary">
                    Discount Applied: <strong>-${discount.toFixed(2)}</strong>
                  </Typography>
                )}
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Final Total: <strong>${(cartTotal - discount).toFixed(2)}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Redemption Section */}
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: 4, boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Redeem Your Points
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Points Balance: <strong>{points}</strong>
                </Typography>

                {/* Input Field */}
                <TextField
                  label="Points to Redeem"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  sx={{ my: 3 }}
                />

                {/* Redeem Button */}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={handleRedemption}
                >
                  Redeem Points
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RedemptionPage;

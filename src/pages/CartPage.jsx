import React from 'react';
import { Box, Typography, Container, Card, CardContent, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, p) => sum + (p.price || 0), 0);

  return (
    <Box>
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>
        <Card>
          <CardContent>
            {cartItems.length === 0 ? (
              <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
              <>
                <List>
                  {cartItems.map((item, index) => (
                    <React.Fragment key={`${item.id}-${index}`}>
                      <ListItem>
                        <ListItemText primary={item.name} secondary={`$${item.price}`} />
                      </ListItem>
                      {index < cartItems.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
                <Typography variant="h6" sx={{ mt: 2 }}>Total: ${total.toFixed(2)}</Typography>
              </>
            )}
            <Box sx={{ mt: 3 }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="outlined">Back to Home</Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default CartPage;



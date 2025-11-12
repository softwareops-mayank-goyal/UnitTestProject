import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { products } from '../data/mockData';
import { Link } from 'react-router-dom';

const menNames = new Set(['Classic Denim Jacket', 'Minimalist Sneakers', 'Elegant Wrist Watch']);

const MenPage = () => {
  const menProducts = products.filter(p => menNames.has(p.name));

  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Men
        </Typography>
        <Grid container spacing={4}>
          {menProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">${product.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Link to="/">Back to Home</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default MenPage;



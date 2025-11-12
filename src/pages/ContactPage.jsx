import React from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <Box>
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Card sx={{ boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Contact - Bain Office (CyberHub, Gurugram)
            </Typography>
            <Typography variant="body1" gutterBottom>
              Office Address:
            </Typography>
            <Typography variant="h6" gutterBottom>
              Bain & Company, DLF Cyber City, Gurugram
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: +91 124 613 5000
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a static address entry for demo purposes.
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography variant="body2">
                <Link to="/">Back to Home</Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ContactPage;



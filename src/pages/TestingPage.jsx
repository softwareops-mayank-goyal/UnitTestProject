import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const TestingPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Testing with Copilot</Typography>
      <Card variant="outlined" sx={{ maxWidth: 600, margin: 'auto' }}>
        <CardContent>
          <Typography variant="h6">Missing Edge Cases:</Typography>
          <List>
            <ListItem><ListItemText primary="Prevent redemption of expired points" /></ListItem>
            <ListItem><ListItemText primary="Enforce minimum redemption value" /></ListItem>
            <ListItem><ListItemText primary="Handle multi-currency points conversion" /></ListItem>
          </List>
          <Typography variant="h6" sx={{ mt: 2 }}>Example Unit Tests:</Typography>
          <pre>
{`
test('should not redeem more points than available', () => {
  expect(() => redeemPoints(600)).toThrowError('Insufficient points');
});

test('should apply correct discount for redeemed points', () => {
  const result = redeemPoints(200);
  expect(result.discount).toBe(20);
});
`}
          </pre>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TestingPage;

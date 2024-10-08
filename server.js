const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

const sweaters = [
  { id: 1, name: 'Cozy Knit Sweater', price: 1179.99, image: 'sweater1.jpg' },
  { id: 2, name: 'Striped Wool Sweater', price: 2289.99, image: 'sweater2.jpg' },
  { id: 3, name: 'Cashmere Turtleneck', price: 3129.99, image: 'sweater3.jpg' },
  { id: 4, name: 'Cable Knit Cardigan', price: 3299.99, image: 'sweater4.jpg' },
];

// Serve index.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/sweaters', (req, res) => {
  res.json(sweaters);
});

app.post('/api/order', (req, res) => {
  const order = req.body;
  console.log('Received order:', order);
  res.json({ message: 'Order received successfully!', orderId: Date.now() });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:3000');
});

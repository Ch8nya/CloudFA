const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

const sweaters = [
  { id: 1, name: 'Cozy Knit Sweater', price: 79.99, image: 'sweater1.jpg' },
  { id: 2, name: 'Striped Wool Sweater', price: 89.99, image: 'sweater2.jpg' },
  { id: 3, name: 'Cashmere Turtleneck', price: 129.99, image: 'sweater3.jpg' },
  { id: 4, name: 'Cable Knit Cardigan', price: 99.99, image: 'sweater4.jpg' },
];

app.get('/api/sweaters', (req, res) => {
  res.json(sweaters);
});

app.post('/api/order', (req, res) => {
  const order = req.body;
  // Here you would typically process the order, save to a database, etc.
  console.log('Received order:', order);
  res.json({ message: 'Order received successfully!', orderId: Date.now() });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
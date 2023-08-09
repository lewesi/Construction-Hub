const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; // Set the port number you want to use

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Construction materials data (you can replace this with data from your database)
const constructionMaterials = [
  {
    id: 1,
    name: 'Cement',
    description: 'A binding material that sets and hardens independently.',
    category: 'Cement',
    price: 12.99,
    image: 'https://example.com/images/cement.jpg',
    quantity: 100,
  },
  {
    id: 2,
    name: 'Bricks',
    description: 'A rectangular block used in construction, typically made of clay.',
    category: 'Bricks',
    price: 0.25,
    image: 'https://example.com/images/bricks.jpg',
    quantity: 500,
  },
  // Add more construction materials here
];

// API endpoint to get all construction materials
app.get('/api/materials', (req, res) => {
  res.json(constructionMaterials);
});

// API endpoint to get a single construction material by ID
app.get('/api/materials/:id', (req, res) => {
  const materialId = parseInt(req.params.id);
  const material = constructionMaterials.find((item) => item.id === materialId);

  if (material) {
    res.json(material);
  } else {
    res.status(404).json({ message: 'Material not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

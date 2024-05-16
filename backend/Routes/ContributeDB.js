const express = require('express');
const multer = require('multer'); // Import multer
const router = express.Router();
const app = express();
const ContributedFoodModel = require('../models/Contribute'); // Renamed variable
const { storage, gfs } = require('../gridfsStorage'); // Import storage and gfs

const upload = multer({ storage }); // Use GridFS storage for uploads

// POST route to upload contributed food data and image
app.post('/upload', upload.single('picture'), async (req, res) => {
  try {
    // Check if image file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No image file uploaded. Please select an image to contribute.' });
    }
    const { description, bestBeforeDate, quantity, price } = req.body;
    // Get uploaded image filename (assuming single image upload)
      await ContributedFoodModel.create({
      description: req.body.description,
      bestBeforeDate: req.body.bestBeforeDate,
      quantity: req.body.quantity,
      price: req.body.price,
      picture: req.file.filename, // Include the filename in the model object
    });

    res.status(201).json({ message: 'Contribution added successfully' });
  } catch (err) {
    console.error('Error adding contribution:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET route to fetch contributed food items
router.get('/contribute', async (req, res) => {
  try {
    // Retrieve all contributed food items from the database
    const contributedFood = await ContributedFoodModel.find();
    res.json(contributedFood);   // Respond with the retrieved data
  } catch (error) {
    // Handle errors
    console.error('Error fetching contributed food:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

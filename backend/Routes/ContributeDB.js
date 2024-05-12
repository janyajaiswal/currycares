const express = require('express');
const multer = require('multer'); // Import multer
const router = express.Router();
const ContributedFoodModel = require('../models/Contribute'); // Renamed variable
const { storage, gfs } = require('../gridfsStorage'); // Import storage and gfs

const upload = multer({ storage }); // Use GridFS storage for uploads

// POST route to upload contributed food data and image
router.post('/contribute', upload.single('picture'), async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ error: 'No image file uploaded. Please select an image to contribute.' });
    }

    const { description, bestBeforeDate, quantity, price } = req.body;

    const filename = req.files[0].filename; // Get uploaded image filename

    const newContribute = await ContributedFoodModel.create({
      description: req.body.description,
      bestBeforeDate: req.body.bestBeforeDate,
      quantity: req.body.quantity,
      price: req.body.price,
      // Add image filename if applicable
      picture: req.files ? req.files[0].filename : undefined, // Optional for image upload
    });

    res.status(201).json({ message: 'Contribution added successfully' });
  } catch (err) {
    console.error('Error adding contribution:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});


router.get('/contribute', async (req, res) => {
  try {
    // Retrieve all contributed food items from the database
    const contributedFood = await ContributedFoodModel.find();

    // Respond with the retrieved data
    res.json(contributedFood);
  } catch (error) {
    // Handle errors
    console.error('Error fetching contributed food:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Contribute = require('../models/Contribute');

// POST route to upload contributed food data
router.post('/contribute', async (req, res) => {
  try {
    const newContribute = new Contribute(req.body);
    await newContribute.save();
    res.status(201).json({ message: 'Contribution added successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET route to fetch contributed food data
router.get('/contribute', async (req, res) => {
  try {
    const contributedFood = await Contribute.find();
    res.json(contributedFood);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

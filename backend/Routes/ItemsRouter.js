// ItemsRouter.js
const express = require('express');
const router = express.Router();
const FoodCategories = require('../models/Items'); // Import the FoodCategories model

// Route to fetch food categories
router.get('/getItems', async (req, res) => {
    try {
        // Fetch food categories from the FoodCategories collection
        const foodCategories = await FoodCategories.find();

        // Add this line to log the retrieved categories
        console.log('Found food categories:', foodCategories);

        // Check if any categories were found
        if (foodCategories.length === 0) {
            return res.status(404).json({ success: false, error: 'No food categories found' });
        }

        // Return success response with the retrieved categories
        res.status(200).json({ success: true, data: foodCategories });
    } catch (error) {
        // Log the error
        console.error('Error fetching food categories:', error);
        
        // Return an error response
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router;

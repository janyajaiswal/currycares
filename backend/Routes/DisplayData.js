const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        // Check if global variables are populated
        if (global.FoodItems && global.FoodCategories) {
            // Send the data as an array with two elements
            res.status(200).json([global.FoodItems, global.FoodCategories]);
        } else {
            // If data is not available, return a 404 status with an error message
            res.status(404).json({ error: 'Food data not found' });
        }
    } catch (error) {
        // If an error occurs, log the error and send a 500 status with an error message
        console.error('Error fetching food data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

const mongoose = require('mongoose');

const contributeSchema = new mongoose.Schema({
  picture: {
    type: String, // Store the GridFS filename here
    required: false, // Allow contributions without images
  },
  description: {
    type: String,
    required: true,
  },
  bestBeforeDate: {
    type: Date,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Contribute', contributeSchema);

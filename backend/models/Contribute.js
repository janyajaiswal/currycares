const mongoose = require('mongoose');

const contributeSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  bestBeforeDate: {
    type: Date,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Contribute = mongoose.model('Contribute', contributeSchema);

module.exports = Contribute;

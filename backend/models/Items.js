require('mongodb');
const mongoose = require('mongoose')//using mongoose to give a schema to mongodb database for validation
const { Schema } = mongoose;

const foodCategorySchema = new Schema({
  id: {
    type: Number,
  },
  cover: {
    type: String,
    required: true
    },
  title: {
    type: String,
    required: true
    }

});

module.exports = mongoose.model('FoodCategories', foodCategorySchema, 'FoodCategories');
// db.js
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://jaiswaljanya:SDP123@currycares.rsaraqd.mongodb.net/CurryCares?retryWrites=true&w=majority&appName=CurryCares';

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    const fetchedData = await mongoose.connection.db.collection("FoodItems").find({}).toArray();
    const FoodCategories = await mongoose.connection.db.collection("FoodCategories").find({}).toArray();

    global.FoodItems = fetchedData;
    global.FoodCategories = FoodCategories;
  } catch (err) {
    console.error("---", err);
  }
};

module.exports = connectToDB;

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://jaiswaljanya:SDP123@currycares.rsaraqd.mongodb.net/CurryCares?retryWrites=true&w=majority&appName=CurryCares';

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectToDB;

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://jaiswaljanya:SDP123›@currycares.rsaraqd.mongodb.net/?retryWrites=true&w=majority&appName=CurryCares';

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

module.exports = connectToDB;

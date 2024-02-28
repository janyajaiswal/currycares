const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://jaiswaljanya:SDP123›@currycares.rsaraqd.mongodb.net/CurryCares?retryWrites=true&w=majority&appName=CurryCares';

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log('Connected to MongoDB');

    const collection = mongoose.connection.db.collection("BackendDB");
    const fetchedData = await collection.find({}).toArray();
    console.log(fetchedData);
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

module.exports = connectToDB;

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://jaiswaljanya:SDP123@currycares.rsaraqd.mongodb.net/CurryCares?retryWrites=true&w=majority&appName=CurryCares';

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
    
    // Get the MongoDB server version from the connection object
    const { version } = await mongoose.connection.db.admin().serverInfo();
    console.log('MongoDB version:', version);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectToDB;

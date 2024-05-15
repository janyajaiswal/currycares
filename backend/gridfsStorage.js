// Import required modules
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

// MongoDB connection URI
const mongoURI = 'mongodb+srv://jaiswaljanya:SDP123@currycares.rsaraqd.mongodb.net/CurryCares?retryWrites=true&w=majority&appName=CurryCares';

// Create a connection
const conn = mongoose.createConnection(mongoURI);

// Listen for connection events
conn.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
conn.once('open', () => {
  console.log('Connected to MongoDB');

  // Now that the connection is open, set up GridFSStorage and multer
  const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: 'Contribute', // Use your collection name (Contribute)
        };
        resolve(fileInfo);
      });
    },
  });

  // Create multer instance
  const upload = multer({ storage });

  // Export storage and upload objects
  module.exports = { storage, upload };
});

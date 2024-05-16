// Import required modules
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs'); // For file system operations

// MongoDB connection URI
const mongoURI = 'mongodb+srv://jaiswaljanya:SDP123@currycares.rsaraqd.mongodb.net/CurryCares?retryWrites=true&w=majority&appName=CurryCares';

// Create a connection
const conn = mongoose.createConnection(mongoURI);

// Listen for connection events
conn.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
conn.once('open', async () => {
  console.log('Connected to MongoDB');

  // Get the GridFSBucket instance for the "Contribute" collection
  const db = conn.db;
  const gridFSBucket = new mongoose.mongo.GridFSBucket(db, { bucketName: 'Contribute' });

  // Multer configuration (without GridFsStorage)
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'src/images'); // Temporary storage for uploaded files
    },
    filename: (req, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename);
    },
  });

  // Create the upload middleware instance (consistent with ContributeDB.js)
  const upload = multer({ storage });

  // Function to handle file upload to GridFS after successful local storage
  async function uploadToGridFS(req, file) {
    const readStream = fs.createReadStream(file.path);
    const uploadStream = gridFSBucket.openUploadStream(file.filename);

    return new Promise((resolve, reject) => {
      const errorHandler = (err) => {
        console.error('Error uploading file to GridFS:', err);
        reject(err);
      };

      readStream.on('error', errorHandler);
      uploadStream.on('error', errorHandler);

      readStream.pipe(uploadStream).on('finish', () => {
        fs.unlink(file.path, (err) => { // Delete temporary file
          if (err) console.error('Error deleting temporary file:', err);
          resolve();
        });
      });
    });
  }

  // Export the upload middleware (consistent with ContributeDB.js)
  module.exports = upload;
});

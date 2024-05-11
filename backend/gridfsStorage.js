const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

const mongoURI = 'mongodb+srv://jaiswaljanya:SDP123@currycares.rsaraqd.mongodb.net/CurryCares?retryWrites=true&w=majority&appName=CurryCares'; // Replace with your actual connection string

const conn = mongoose.createConnection(mongoURI, {});

const storage = GridFsStorage({
  uri: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `${Date.now()}-${file.originalname}`;
      const fileInfo = {
        filename: filename,
        bucketName: 'Contribute', // Use your collection name (Contribute)
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

const gfs = conn.gfs; // Use the GridFS instance from the connection

module.exports = { storage, upload, gfs }; // Export storage, upload, and gfs objects

const express = require('express');
const app = express();
const port = 4000;
const toconnect = require("/Users/janyajaiswal/Desktop/SDP/currycares/backend/db.js");

toconnect(); // Call the function to establish the database connection

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

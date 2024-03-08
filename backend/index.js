const express = require('express');
const app = express();
const port = 4000;
const toconnect = require("/Users/janyajaiswal/Desktop/SDP/currycares/backend/db.js");

toconnect(); // Call the function to establish the database connection

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())
app.use('/api', require("./Routes/CreateUser")) //connects to endpoint to get a response
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

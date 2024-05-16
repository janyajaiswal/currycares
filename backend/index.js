const express = require('express');
const app = express();
const port = 4000;
const toconnect = require("./db.js"); // Update the path to use a relative path
const itemsRouter = require("./Routes/ItemsRouter");
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const methodOverride = require('method-override');

app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from http://localhost:3000

toconnect(); // Call the function to establish the database connection

app.use(express.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/ContributeDB.js"))
app.use('/api', itemsRouter); 

app.use(bodyParser.json({ limit: '2mb' }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

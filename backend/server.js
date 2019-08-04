const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


//! MONGODB CONNECTION
const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
  .catch(err => console.error(`ERROR: ${err}`));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});
//! SERVER
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//! Routes
const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

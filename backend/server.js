const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoute = require('./routes/auth');

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
app.use(express.json());

//! Routes
const productsRouter = require('./routes/products');
app.use('/', productsRouter);

//! Auth route
app.use('/user', authRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

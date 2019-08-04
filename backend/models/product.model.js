const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  inCart: {
    type: Boolean,
    default: false
  },
  count: Number,
  total: Number

}, { timeStamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
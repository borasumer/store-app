const router = require('express').Router();

const Product = require('../models/product.model');

router.route('/add').post((req, res) => {
  req.body.map(item => {
    const title = item.title;
    const img = item.img;
    const price = item.price;
    const company = item.company;
    const info = item.info;
    const count = item.count;
    const total = item.total;
    const product = new Product({
      title,
      img,
      price,
      company,
      info,
      count,
      total
    });
    product.save()
      .then(() => console.log('products are added'))
      .catch(err => console.log(err));
  })
});

router.route('/').get((req, res) => {
  Product.find()
    .then(product => {
      res.json(product);
    })
    .catch(err => console.log(err))
});


module.exports = router;
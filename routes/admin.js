const express = require('express');
const path = require('path');

const router = express.Router();
const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', { title: 'Add Product' })
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
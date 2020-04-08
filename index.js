const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const shopRoute = require('./routes/shop');
const adminData = require('./routes/admin');

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoute); 

app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
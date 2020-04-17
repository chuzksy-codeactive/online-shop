const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const shopRoute = require('./routes/shop');
const adminRoute = require('./routes/admin');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute );
app.use(shopRoute); 

app.use(errorController.get404 );

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
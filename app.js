const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.use('/', routes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

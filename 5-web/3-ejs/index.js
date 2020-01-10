const express = require('express');

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');// view folder is looked by default and from there index.ejs is used to display
});

server.get('/about', (req, res) => {
    res.render('about'); //view folder is looked by default and from there about.ejs is used to display
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});

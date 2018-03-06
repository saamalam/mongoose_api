const express = require('express');
const bodyParser= require('body-parser');
const path = require('path');

const routes = require('./routes/index')



//Init app
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);
app.set('view engine', 'ejs');


// Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000...');
});
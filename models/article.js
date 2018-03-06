const mongoose = require('mongoose');

//connect to mongodb driver 
//mongoose.connect('mongodb://localhost/nodekb');
mongoose.connect('mongodb://saamalam:saamalam@ds153948.mlab.com:53948/bookstore');
let db = mongoose.connection;

// Check connection
/*
db.once('open', function(){
    console.log('Connected to MongoDB');
  });
  */
  
  // Check for DB errors
db.on('error', function(err){
    console.log(err);
  });

let articleSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Articles', articleSchema);


const express = require('express');
const router = express.Router();

// Bring in Models
let Article = require('../models/article');

// Home Route
router.get('/', function(req, res){
  console.log(req);
  
  Article.find(function(err, articles){
    if(err) console.log(err);
 //res.send(articles);
 //res.json(articles);
 //res.sendFile(__dirname + '/views/index.html');
 res.render('../views/index.ejs', {posts: articles});
  });
});

// Home Route by ID
router.get('/:id', function(req, res){
  console.log(req.params.id);
  Article.findById(req.params.id, function(err, article){
    if(err) console.log(err);
  //res.send(articles);
  //res.json(article);
  res.render('../views/index.ejs', {posts: [article]});
  });
});

//post data
router.post('/articles', (req, res) => {
  //db.collection('articles').save(req.body, (err, result) => {
    Article.create(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  })
});
module.exports = router;
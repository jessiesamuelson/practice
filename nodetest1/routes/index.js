// Require express, and attach a router vairable to Express's router method
var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET Hello World page */ 
router.get('/helloworld', function(req, res) {
	res.render('helloworld', { title: "Hello, World!" })
})





/* GET Userlist page. */

// extract the "db" object we passed to our http request, and then using that db connection to fill our "docs" variable with database documents, ie: user data. Then we do a page render just like the other two "gets" in this route file.
// Basically, we tell our app which collection we want to use ('usercollection') and do a find, then return the results as the variable "docs". 

router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('userlist', {
        "userlist" : docs
    });
  });
});


/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName  = req.body.username;
  var userEmail = req.body.useremail;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
    "username" : userName,
    "email" : userEmail
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect("userlist");
    }
  });
});

module.exports = router;

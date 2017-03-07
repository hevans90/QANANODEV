var express = require('express');
var router = express.Router();

var bodyText = 'Wow this is some amazing descriptory information describing us extensively. Also this is a pretty cool paragraph!';

/* GET about us page. */
router.get('/', function(req, res, next) {
  res.render('aboutus', { title: 'About Us', body: bodyText });
});

module.exports = router;
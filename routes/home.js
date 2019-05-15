var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // render the index page, and pass data to it.
    res.render('index', { title: 'Express' });
});

module.exports = router;

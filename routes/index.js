var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GRT locallhost 3000/tast*/
router.get('/tast', function(req, res, next){
  res.send("this is new start!")
});

module.exports = router;
Express 
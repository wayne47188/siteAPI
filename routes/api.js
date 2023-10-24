var express = require('express');
var router = express.Router();

const data = [
    {
        id:1,
        title: '讚ㄉ'
    }
]

/* GET localhost:3000/api. */
router.get('/products', function(req, res, next) {
  
    res.send({
   success: true,
   data 
  });
    res.end();

});

module.exports = router;

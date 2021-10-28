var express = require('express');
var router = express.Router();
var number=0
/* GET users listing. */

router.get('/', function(req, res, next) {

  var result= Math.acosh(req.query.x);
  var result1=Math.log1p(req.query.x);
  var result2=Math.tan(req.query.y);
  var result3=Math.sqrt(req.query.y);
  
  res.send('Values are : '+' Math.acosh():'+result+'Math.log1p()'+result1+'Math.tan()'+result2+'Math.sqrt()'+result3)
});

module.exports = router;

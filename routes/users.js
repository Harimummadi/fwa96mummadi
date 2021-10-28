var express = require('express');
var router = express.Router();
var number=0
/* GET users listing. */

router.get('/', function(req, res, next) {
  number=number+1
  res.send('The number of times User accessesed is : '+number);
});

module.exports = router;

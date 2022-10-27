
var express = require('express');
var router = express.Router();
var x = Math.random();
var y = Math.random();
var val1 = "Math.atan(x) applied to " + x + " is " + Math.atan(x)
var val2 = "Math.exp(x) applied to " + x + " is " + Math.exp(x)
var val3 = "Math.expm1(x) applied to " + x + " is " + Math.expm1(x);
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('computation', { title: 'VEDHA SRI GADDAM   ', value1: val1, value2: val2, value3: val3 });
});
module.exports = router;
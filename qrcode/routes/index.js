var express = require('express');
var router = express.Router();
const qr = require("qrcode");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple QR Code generator' });
});

router.get('/:code', function(req, res, next) {
  console.log(req.params.code)

  qr.toFile("qrcode.png",req.params.code,(err) => {
    if (err) res.send("Error occured")
    res.download("qrcode.png")
  })   
});

module.exports = router;

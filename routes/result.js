var express = require('express');
var router = express.Router();


router.get("/", function(req, res) {
  res.render("result");

});


router.post("/", function(req, res) {
 res.render("result", {username:
     req.body.username, message: req.body.message});
});



module.exports = router;
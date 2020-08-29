var express = require('express');
var router = express.Router();


router.get("/", function(req, res) {

  res.render("result", {
    question: Number(req.query.question)-1,
    correct: req.query.correct
  });


});





module.exports = router;
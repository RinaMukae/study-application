var express = require('express');
var router = express.Router();
var lists = require('../lib/lists');

router.get("/", function(req, res) {
  var num = Number(req.query.question);
  lists.findAll({
    order: [['id', 'ASC']]
  }).then((lists) => {
    
    if(num === 1){
      res.render("meantest", {
        question: num,
        lists: lists
      });
    }else{
      res.render("meantest", {
        question: num,
        lists: lists,
        correct: Number(req.query.correct)
      });
    }

  });

});





module.exports = router;
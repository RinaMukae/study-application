var express = require('express');
var router = express.Router();
var lists = require('../lib/lists');

router.get("/", function(req, res) {
  lists.findOne({
    where: {
      id: req.query.list
    },
    order: [['id', 'ASC']]
  }).then((list) => {
    console.log(list);
    res.render("correct", {
      question: req.query.question,
      list: list,
      correct: req.query.correct
    });

  });

});

router.post("/", function(req, res){
  var num = Number(req.body.index);
  lists.findOne({
    where: {
      id: num
    },
    order: [['id', 'ASC']]
  }).then((list) => {
    res.render("correct", {
      question: Number(req.body.question)+1,
      list: list,
      correct: Number(req.body.correct)+1
    });
  });
});


module.exports = router;
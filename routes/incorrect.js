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
    res.render("incorrect", {
      question: req.query.question,
      list: list,
      correct: req.query.correct
    });

  });

});





module.exports = router;
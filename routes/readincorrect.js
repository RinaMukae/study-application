var express = require('express');
var router = express.Router();
var lists = require('../lib/lists');

router.get("/", function(req, res) {
  lists.findOne({
    where: {
      id: req.body.list
    },
    order: [['id', 'ASC']]
  }).then((list) => {
    res.render("readincorrect", {
      question: Number(req.query.question)+1,
      list: list,
      correct: req.body.correct
    });

  });

});





module.exports = router;
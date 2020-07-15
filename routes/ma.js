var express = require('express');
var router = express.Router();
var yoji = require('../lib/yoji');
var lists = require('../lib/lists');

router.get("/", function(req, res) {
  
  lists.findAll({
    order: [['id', 'ASC']]
  }).then((lists) => {
    res.render("ma", {
      lists: lists
    });

  });

});





module.exports = router;
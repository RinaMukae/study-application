var express = require('express');
var router = express.Router();
var lists = require('../lib/lists');


router.get("/", function(req, res) {
  lists.findAll({
    order: [['id', 'ASC']]
  }).then((lists) =>{
  res.render("readtest", {
    lists: lists
    });
  });
});





module.exports = router;
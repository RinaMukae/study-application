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

router.post("/", function(req, res) {
  lists.findAll({
    order: [['id', 'ASC']]
  }).then((lists) =>{
  res.render("readtest", {
    lists: lists
    });
  });
});
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

GLOBAL.document = new JSDOM().window.document;





module.exports = router;
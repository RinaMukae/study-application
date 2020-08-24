var express = require('express');
var router = express.Router();
var lists = require('../lib/lists');


router.get("/", function(req, res) {
 
  lists.findAll({
    order: [['id', 'ASC']]
  }).then((lists) =>{
    if(req.query.question == "1"){
      res.render("readtest", {
        question: req.query.question,
        lists: lists
      });
    }else{
      res.render("readtest", {
        question: req.query.question,
        lists: lists,
        correct: Number(req.query.correct)
      });
    }
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
    if(req.body.text === req.body.read.slice(0, -1)){
      res.render("readcorrect", {
        question: Number(req.body.question)+1,
        list: list,
        correct: Number(req.body.correct)+1
      });
    }else{
      res.render("readincorrect", {
        question: Number(req.body.question)+1,
        list: list,
        correct: Number(req.body.correct)
      });
    }
  });
});








module.exports = router;
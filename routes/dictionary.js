var express = require('express');
var router = express.Router();
var lists = require('../lib/lists');

router.get("/", function(req, res) {
  
  lists.findOne({
    where: {
      id: req.query.id
    }
  }).then((result) => {
    var flag = result.read.slice(0,1);
    
    res.render("dictionary", {
      list: result,
      gyou: 
    });

  });

});





module.exports = router;
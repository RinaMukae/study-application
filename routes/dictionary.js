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
    console.log(flag);
    
   /* aArr = ['a','あ','い','う','え','お'];
    kaArr = ['ka','か','き','く','け','こ','が','ぎ','ぐ','げ','ご'];
    saArr = ['sa','さ','し','す','せ','そ','ざ','じ','ず','ぜ','ぞ'];
    taArr = ['ta','た','ち','つ','て','と','だ','ぢ','づ','で','ど'];
    naArr = ['na','な','に','ぬ','ね','の'];
    haArr = ['ha','は','ひ','ふ','へ','ほ','ば','び','ぶ','べ','ぼ','ぱ','ぴ','ぷ','ぺ','ぽ'];
    maArr = ['ma','ま','み','む','め','も'];
    yaArr = ['ya','や','ゆ','よ'];
    raArr = ['ra','ら','り','る','れ','ろ'];
    */
    
   
    var kanaArr = [['a','あ','い','う','え','お'],['ka','か','き','く','け','こ','が','ぎ','ぐ','げ','ご'],
                  ['sa','さ','し','す','せ','そ','ざ','じ','ず','ぜ','ぞ'],['na','な','に','ぬ','ね','の'],
                  ['ha','は','ひ','ふ','へ','ほ','ば','び','ぶ','べ','ぼ','ぱ','ぴ','ぷ','ぺ','ぽ'],
                  ['ma','ま','み','む','め','も'],['ya','や','ゆ','よ'],['ra','ら','り','る','れ','ろ']];
    
    for (i = 0; i < 8; i++){
      for (j = 1; j < kanaArr[i].length; j++){
        if (kanaArr[i][j] == flag){
          var gyou = kanaArr[i][0];
        }
      }
    }
 
    
    res.render("dictionary", {
      list: result,
      gyou: gyou
    });
    

  });

});





module.exports = router;
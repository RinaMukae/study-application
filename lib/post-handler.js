const util = require('./handler-util');
const Post = require('./post');
const ejs = require('ejs');

  Post.findAll().then((posts) => {
    res.end(ejs.renderFile('./views/a.ejs', {
      posts: posts
    }));
  });

  
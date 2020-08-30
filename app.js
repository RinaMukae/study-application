'use strict';

var http = require('http');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');


var indexRouter = require('./routes/index');
var selectRouter = require('./routes/select');
var aRouter = require('./routes/a');
var kaRouter = require('./routes/ka');
var saRouter = require('./routes/sa');
var taRouter = require('./routes/ta');
var naRouter = require('./routes/na');
var haRouter = require('./routes/ha');
var maRouter = require('./routes/ma');
var yaRouter = require('./routes/ya');
var raRouter = require('./routes/ra');
var dictionaryRouter = require('./routes/dictionary');
var meantestRouter = require('./routes/meantest');
var readtestRouter = require('./routes/readtest');
var correctRouter = require('./routes/correct');
var incorrectRouter = require('./routes/incorrect');
//var readcorrectRouter = require('./routes/readcorrect');
//var readincorrectRouter = require('./routes/readincorrect');
var resultRouter = require('./routes/result');

var app = express();

//ファビコンの設定
app.use(favicon(__dirname + '/public/image/favicon.ico'));

//スタイルシート
app.use(express.static(__dirname));

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false}));

app.use(
express.static(path.join(__dirname, "public")));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/select', selectRouter);
app.use('/a', aRouter);
app.use('/ka', kaRouter);
app.use('/sa', saRouter);
app.use('/ta', taRouter);
app.use('/na', naRouter);
app.use('/ha', haRouter);
app.use('/ma', maRouter);
app.use('/ya', yaRouter);
app.use('/ra', raRouter);
app.use('/dictionary', dictionaryRouter);
app.use('/readtest', readtestRouter);
app.use('/meantest', meantestRouter);
app.use('/correct', correctRouter);
app.use('/incorrect', incorrectRouter);
//app.use('/readcorrect', readcorrectRouter);
//app.use('/readincorrect', readincorrectRouter);
app.use('/result', resultRouter);

var server = http.createServer(app);
var port = 8000;
server.listen(port);

console.info('Listening to ' + port);


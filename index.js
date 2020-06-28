'use strict';

var http = require('http');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var formRouter = require('./routes/form');
var indexRouter = require('./routes/index');
var resultRouter = require('./routes/result');

var app = express();

//ファビコンの設定
app.use(favicon(__dirname + '/public/image/favicon.ico'));

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false}));

app.use(
express.static(path.join(__dirname, "public")));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/form', formRouter);
app.use('/', indexRouter);
app.use('/result', resultRouter);


var server = http.createServer(app);
var port = 8000;
server.listen(port);

console.info('Listening to ' + port);


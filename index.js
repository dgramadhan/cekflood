var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    controller = require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// kalau pengen ujicoba tanpa link comment ini dibawah
app.use(express.static('public'));
app.use(express.static('assets'));
app.use(express.static('json'));
app.use(express.static('website'));

// 

var routes = require('./routes');
routes(app);

app.listen(port);
console.log('API jalan di port : ' + port);

//26 MEI 2020
app.set('view engine','ejs');
var path = require('path');
app.set('website',path.join(__dirname,'website'));

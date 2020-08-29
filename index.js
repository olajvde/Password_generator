var express = require('express');

var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });

var pagesRoute = require('./routes/pages.js')
var app = express();



app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars');


app.use('/', pagesRoute);





app.listen(app.get('port'));
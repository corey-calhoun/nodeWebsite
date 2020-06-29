const express = require('express');
const morgan = require('morgan');
const quote = require('./lib/quote');

const app = express();

// set up handlebars view engine
const handlebars = require('express-handlebars')
        .create({ defaultLayout: 'main'});

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine);

// set static file middleware
app.use(express.static(__dirname + '/public'));

// set morgan middleware to see HTTP request info
app.use(morgan('common'));

// set app listening port
app.set('port', process.env.port || 3000);

// set home page
app.get('/', function(req,res) {
    res.render('home');
});


app.get('/about', function(req, res) {
    res.render('about', { quote: quote.getQuote()});
});

// 404 catch-all handler (middleware)
app.use(function(req,res) {
    res.status(404);
    res.render('404');
});

// 500 catch-all handler (middleware)
app.use(function(error, req, res, next) {
    console.error(error.stack)
    res.status(500);
    res.render('500');
});


app.listen(app.get('port'), function() {
    console.log(`Server running on http://localhost:` + app.get('port') + '; press CTRL-C to terminate...')
});
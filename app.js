const express = require('express');
const morgan = require('morgan');
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
    const quotes = [
        'If you can not look on the bright side, then I will sit with you in the doNotTrack.',
        'You are entirely bonkers but I will tell you a secret. All the best people are!',
        'I knew who I was this morning but I have changed since then.',
        'Everyone wants some magical solution for their problem and everyone refuses to believe in magic.',
        'You are trying to understand madness with logic. This is not unlike searching for darkness with a torch.',
        'Screw the box, I think outside the straight jacket.',
        'A dream is not reality, but who is to say which is which?',
        'If you knew Time as well as I do, you would not talk about wasting it!'    
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.render('about', { quote: randomQuote});
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
var express = require('express');

app = express();
app.use(express.logger());
app.use(express.static('static'));

app.get('/summaries', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify([
        { url: 'http://stylecouncil.org', description: 'Cafe Bleu' },
        { url: 'http://another.com', description: 'Cafe Cafe' },
    ]));
});

app.listen(8080);

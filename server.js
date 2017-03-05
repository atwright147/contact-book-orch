var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/data', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');  // eslint-disable-line no-console
});

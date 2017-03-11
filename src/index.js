import express from 'express';
const models = require('./models');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/data', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    });
});

app.get('/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // return Users
    //     .all()
    //     .then(users => res.status(200).send(users))
    //     .catch(error => res.status(400).send(error));
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');  // eslint-disable-line no-console
});

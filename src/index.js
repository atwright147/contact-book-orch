import express from 'express';

import User from './models/user'
import Group from './models/group'

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
    User
        .fetchAll()
        .then(function(users) {
            res.json({ users });
        });
});

app.get('/groups', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Group
        .fetchAll()
        .then(function(groups) {
            res.json({ groups });
        });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');  // eslint-disable-line no-console
});

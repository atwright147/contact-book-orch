import express from 'express';
import bodyParser from 'body-parser';

import User from './models/user'
import Group from './models/group'

import usersController from './controllers/users';

const app = express();

app.use(bodyParser.json());
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

app.get('/users', usersController.listAll);
app.get('/user/:id', usersController.list);
app.post('/user', usersController.create);
app.put('/user', usersController.update);
app.delete('/user/:id', usersController.destroy);

app.get('/groups', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Group
        .fetchAll()
        .then(function(groups) {
            res.json({ groups });
        });
});

app.get('/users_groups', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    User
        .forge().fetch({withRelated: ['groups']})
        .then(function (collection) {
            res.send(collection.toJSON());
        });
});

app.get('/groups_users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Group
        .forge().fetch({withRelated: ['users']})
        .then(function (collection) {
            res.send(collection.toJSON());
        });
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');  // eslint-disable-line no-console
});

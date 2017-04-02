import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import User from './models/user'
import Group from './models/group'

import usersController from './controllers/users';
import groupsController from './controllers/groups';

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', usersController.listAll);
app.get('/user/:id', usersController.list);
app.post('/user', usersController.create);
app.put('/user', usersController.update);
app.delete('/user/:id', usersController.destroy);

app.get('/groups', groupsController.listAll);
app.get('/group/:id', groupsController.list);
app.post('/group', groupsController.create);
app.put('/group', groupsController.update);
app.delete('/group/:id', groupsController.destroy);

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

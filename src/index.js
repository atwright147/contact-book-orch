import express from 'express';
import db from './models/index';

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

app.get('/db', (req, res) => {
    db.sequelize
        .authenticate()
        .then(() => {
            res.send('Connection has been established successfully.');
        }, (err) => { 
            res.send('Unable to connect to the database:', err);
        });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');  // eslint-disable-line no-console
});

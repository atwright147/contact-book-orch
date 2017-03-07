import express from 'express';
const router = express.Router();
const Comment = require('../models/comment');

router.use('/comments', require('./comments'));
router.use('/users', require('./users'));

router.get('/', function(req, res) {
    Comment.all(function(err, comments) {
        res.render('index', {comments: comments});
    });
});

module.exports = router;

import knex from 'knex';
import bookshelf from 'bookshelf';
import User from '../models/user';

const usersController = {
    /*
    index()   // view
    store()
    update($id)
    destroy($id)
    */

    /**
     * List all users the user is in groups with
     */
    list: (req, res) => (
        User
            .where('id', req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).send(error))
    ),

    /**
     * List ALL users
     */
    listAll: (req, res) => (
        User
            .fetchAll()
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).send(error))
    ),

    /**
     * Create a new user
     */
    create: (req, res) => (
        new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                active: 1,
            })
            .save()
            .then(result => res.status(201).send(result))
            .catch(error => res.status(400).send(error))
    ),

    /**
     * Update an existing user
     * @param {Number} - `req.params.id` id of the user to update
     */
    update: (req, res) => (
        User
            .where('id', req.params.id)
            .fetch()
            .then((user) => {
                user
                    .save({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        emailAddress: req.body.emailAddress,
                    })
                    .then(result => res.json(result))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    ),

    /**
     * Destroy (delete) an existing user
     * @param {Number} - `req.params.id` id of the user to destroy
     */
    destroy: (req, res) => (
        User
            .where('id', req.params.id)
            .destroy()
            .then(result => res.json(result))
            .catch(error => res.status(400).send(error))
    ),

};

export default usersController;

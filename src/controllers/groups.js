import Group from '../models/group';

const groupsController = {
    /**
     * List all users the user is in groups with
     */
    list: (req, res) => (
        Group
            .where('id', Number(req.params.id))
            .fetch({withRelated: ['users']})
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).send(error))
    ),

    /**
     * List ALL users
     */
    listAll: (req, res) => (
        Group
            .fetchAll()
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).send(error))
    ),

    /**
     * Create a new user
     */
    create: (req, res) => (
        new Group({
                name: req.body.name,
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
        Group
            .where('id', req.params.id)
            .fetch()
            .then((user) => {
                user
                    .save({
                        name: req.body.name,
                        active: 1,
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
        Group
            .where('id', Number(req.params.id))
            .destroy()
            .then(result => res.json(result))
            .catch(error => res.status(400).send(error))
    ),

};

export default groupsController;

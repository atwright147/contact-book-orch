import User from '../models/user';

const usersController = {
    /*
    index()
    create()
    store()
    show($id)
    edit($id)
    update($id)
    destroy($id)
    */

    create: (req, res) => (
        User
            .create({
                title: req.body.title,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error))
    )

};

export default usersController;


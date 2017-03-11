const Groups = require('index').groups;

export default (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        firstname: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        active: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function(models) {  // eslint-disable-line no-unused-vars
                Users.belongsToMany(models.Groups, {through: 'users_groups'});
            }
        }
    });
    return Users;
};

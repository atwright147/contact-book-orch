const Users = require('index').users;

export default (sequelize, DataTypes) => {
    const Groups = sequelize.define('Groups', {
        name: DataTypes.STRING,
        active: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function(models) {
                Groups.belongsToMany(Users, {through: 'users_groups'});
            }
        }
    });
     return Groups;
};

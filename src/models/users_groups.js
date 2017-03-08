export default (sequelize, DataTypes) => {
    const Users_Groups = sequelize.define('Users_Groups', {
        users_id: DataTypes.INTEGER,
        groups_id: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {  // eslint-disable-line no-unused-vars
                // associations can be defined here
            }
        }
    });
    return Users_Groups;
};

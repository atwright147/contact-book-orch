export default (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Groups;
};

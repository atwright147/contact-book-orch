import bookshelf from '../../bookshelf';
import Group from './group';

const User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    groups: function() {
        return this.belongsToMany(Group).withPivot(['group_id']);  
    }
});

export default User;

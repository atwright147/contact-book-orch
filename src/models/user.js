import bookshelf from '../../bookshelf';
import Group from './group';

const User = bookshelf.Model.extend({
    tableName: 'users',
    timestamps: true,
    groups: function() {
        return this.belongsToMany(Group).withPivot(['group_id']);  
    }
});

export default User;

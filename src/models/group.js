import bookshelf from '../../bookshelf';
import User from './user';

const Group = bookshelf.Model.extend({
    tableName: 'groups',
    timestamps: true,
    users: function() {
        return this.belongsToMany(User).withPivot(['user_id']);  
    }
});

export default Group;

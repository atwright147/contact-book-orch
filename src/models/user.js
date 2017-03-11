import bookshelf from '../../bookshelf';
import Group from './group';

const User = bookshelf.Model.extend({
    tableName: 'users',
    groups: function() {
        return this.hasMany(Group);
    }
});

export default User;

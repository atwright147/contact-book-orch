import bookshelf from '../../bookshelf';
import Group from './groups';

const User = bookshelf.Model.extend({
    tableName: 'users',
    groups: function() {
        return this.hasMany(Group);
    }
});

export default User;

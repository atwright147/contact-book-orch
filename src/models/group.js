import bookshelf from '../../bookshelf';
import User from './user';

const Group = bookshelf.Model.extend({
    tableName: 'groups',
    groups: function() {
        return this.belongsTo(User);
    }
});

export default Group;

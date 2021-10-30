const User = require('./User');
const Project = require('./Project');

User.hasMany(Project)
Project.belongsTo(User)


module.exports = { User, Project };

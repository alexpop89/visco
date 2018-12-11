const folders_setup = require('./folders-setup');

module.exports = function (path) {
    folders_setup(path).then(console.log.bind(this, 'YAY!'));
};
const fs = require('fs');
const waitForUserInput = require('./wait-for-user-input');
let config;

module.exports = function(path) {
    config = require('./config')(path);
    __createFolder(path, 'backend')
        .then(__createFolder.bind(this, path, 'client'));
};

function __createFolder(path, type) {
    return new Promise((resolve) => {
        let conf = {};
        let locations, existing;

        try {
            conf = config.read();
            locations = conf.locations;
            existing = locations[ 'type' ];
        } catch (ignore) {}

        waitForUserInput(`Specify a folder name for ${type} location: ${existing ? '(' + existing + ')' : ''}`)
            .then(input => {
                if (!fs.existsSync(`${path}/${input}`)) {
                    fs.mkdirSync(`${path}/${input}`);
                }
                conf.locations = conf.locations || {};
                conf.locations[ 'type' ] = input;

                config.update(conf);
                return resolve();
            });
    });
}
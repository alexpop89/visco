const fs = require('fs');

const config_setup = require('./config-setup');
const user_input = require('../utils/user-input');

const folder_types = ['server', 'client'];

module.exports = async function (path) {
    for (let index in folder_types) {
        await run.create_folder(path, folder_types[index]);
    }
};
const run = {
    create_folder: async (path, type) => {
        const conf = config_setup(path);
        const config = conf.run.read_config(conf.file);

        let existing;

        try {
            existing = config[type].location;
        } catch (ignore) {}

        return user_input(`Specify a folder name for ${type} location ${existing ? '(' + existing + ')' : '' }:`)
            .then(input => {
                if (!fs.existsSync(`${path}/${input}`)) {
                    fs.mkdirSync(`${path}/${input}`);
                }
                config[type] = config[type] || {};
                config[type].location = `./${input}`;
                conf.run.update(conf.file, config);
                return Promise.resolve();
            });
    }
}
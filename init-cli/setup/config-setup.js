const fs = require('fs');
const json_file = require('jsonfile');
const file_name = 'config.json';

module.exports = function(path) {
    const file = `${path}/${file_name}`;
    run.check_exists(file) || run.create_config(file);

    return {file, run};
};

const run = {
    update: function(path, data) {
        return json_file.writeFileSync(path, data);
    },
    create_config: path => {
        return json_file.writeFileSync(path, {});
    },
    read_config: path => {
        return json_file.readFileSync(path);
    },
    check_exists: path => {
        try {
            json_file.readFileSync(path);
            return true;
        } catch (ignore) {
            return false;
        }
    }
};
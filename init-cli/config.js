const fs = require('fs');
const jsonfile = require('jsonfile');

module.exports = function(path) {
    return {
        update: function(jsonData) {
            fs.open(filename, 'r', function(err, fd) {
                if (err) {
                    fs.writeFile(`${path}/config.json`, '', function(err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
            });

            jsonfile.writeFile(`${path}/config.json`, jsonData, function (err) {
                if (err) console.error(err)
            })
        },
        read: function () {
            const file = `${path}/config.json`;
            jsonfile.readFile(file, function (err, obj) {
                if (err) {
                    throw (err);
                } else {
                    return obj;
                }
            })

        }
    };
};

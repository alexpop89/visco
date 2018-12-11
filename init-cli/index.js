#!/usr/bin/env node
const path = require('path');
const intro = require('./intro');
const user_input = require('./utils/user-input');
const setup = require('./setup/index');

// grab provided arguments
const [ , , ...args ] = process.argv;
const pwd = process.env.PWD;
let directory, path_argument;

try {
    path_argument = path.normalize(args[ 0 ]);
} catch (ignore) {}

try {
    directory = path.join(pwd, path_argument);
    intro(directory);
    setup(directory);
} catch (ignore) {
    user_input('Please specify a path where to setup Visco: ').then(input => {
        directory = path.join(pwd, input);
        intro(directory);
        setup(directory);
    });
}





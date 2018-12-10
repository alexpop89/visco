#!/usr/bin/env node
const intro = require('./intro');
const waitForUserInput = require('./wait-for-user-input');
const setup = require('./setup');

// grab provided arguments
const [,, ...args] = process.argv;
let path = args[0];

intro(path);

if (!path) {
    waitForUserInput('Please specify a path where to setup Visco: ').then(input => {
        path = input;
        intro(path);
        setup(path);
    })
} else {
    setup(path);
}





module.exports = function(path) {
    process.stdout.write('\033c');
    console.log(`
         _   _ _____ _____ _____ _____ 
        | | | |_   _/  ___/  __ \\  _  |
        | | | | | | \\ \`--.| /  \\/ | | |
        | | | | | |  \`--. \\ |   | | | |
        \\ \\_/ /_| |_/\\__/ / \\__/\\ \\_/ /
         \\___/ \\___/\\____/ \\____/\\___/
    `);

    console.log(`Setting up Visco ${path ? 'in ' + path : '...'}`);
};

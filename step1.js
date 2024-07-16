const fs = require('fs');
const process = require('process');

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            // handle possible error
            console.error(`Error reading ${path}: ${err}`);
            // kill the process and tell the shell it errored
            process.exit(1);
        } else {
            // print contents of file
            console.log(`file contents: ${data}`);
        }
        console.log('reading file...');
    });

    }

    cat(process.argv[2]);

    module.exports = cat;
const fs = require('fs');
const process = require('process');
const axios = require('axios');

const { cat } = require('./step1');

async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    }
    catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
}
else {
    cat(path);
}

module.exports = { webCat };

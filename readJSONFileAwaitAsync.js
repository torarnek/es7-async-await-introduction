"use strict"
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function readJSONFile() {
    const data = await fs.readFileAsync("file.json", "utf8");
    return JSON.parse(data);
}

module.exports = async function() {
    try {
        var json = await readJSONFile();
        console.log("asyncAwait:", json);
        //continue program
    } catch(err) {
        //do something
    };
};

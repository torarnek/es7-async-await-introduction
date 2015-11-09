const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

function readJSONFile() {
    return fs.readFileAsync("file.json", "utf8")
        .then(data => {
            return JSON.parse(data);
        })
}

module.exports = function () {
    readJSONFile()
        .then(json => {
            console.log("promise:", json);
            //continue program
        })
        .catch(err => {
            //do something
        })
};

const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

fs.readFileAsync("file.txt", "utf8")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("error: " + error);
    });







const fs = require("fs");

function readJSONFile(callback) {
    fs.readFile("file.json", "utf8", (err, data) => {
        if (err) throw err;
        callback(JSON.parse(data));
    });
};

module.exports = function () {
    try {
        readJSONFile(
            json => {
                console.log("callback:", json);
                //continue program
            });
    } catch (err) {
        //do something
    }
};

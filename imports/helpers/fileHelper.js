var fs = require('fs');
var path = require('path');

// Warning cannot be used from client side
let writeFileSyncServer = function (pathFileName, content) {
    fs.writeFile(pathFileName, JSON.stringify(content, null, 2), 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(`The file was saved ${pathFileName}`);
    }); 
};

let greetUser = function() {
    return 'Hello anonymous';
}

//https://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it
module.exports = { 
    writeFileSyncServer,
    greetUser 
};

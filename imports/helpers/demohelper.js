// https://stackoverflow.com/questions/3922994/share-variables-between-files-in-node-js
var _name = 'I shall not be null'

exports.getName = function () {
    return _name;
};

exports.setName = function (name) {
    //validate the name...
    _name = name;
};

//  usage in another file
// var demoHelper = require('../helpers/demohelper.js');
// console.log(demoHelper.getName());
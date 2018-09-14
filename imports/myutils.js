require('dotenv').config()
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader(process.env.ANT_BUILD_FILE);
const yargs = require('yargs');
const argv = yargs.argv

console.log('*** inside myutils');
console.log('*** yargs arguments = ' + argv);
console.log('*** Build.properties = ' + process.env.ANT_BUILD_FILE);
console.log('*** username = ' + properties.get('sf.devciam.username'));

var addNote = () => {

};

module.exports = {
    addNote,
    properties,
    yargs,
}
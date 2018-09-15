require('dotenv').config()
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader(process.env.ANT_BUILD_FILE);
const util = require('util');

var debug = () => {
    console.log('*** inside myutils');
    console.log('*** yargs arguments = ' + inspect(yargs.argv));
    console.log('*** process arguments = ' + process.argv);
    console.log('*** Build.properties = ' + process.env.ANT_BUILD_FILE);
    console.log('*** username = ' + properties.get('sf.devciam.username'));
};

var inspect = (myObject) => {
    //console.log(util.inspect(myObject, { showHidden: false, depth: null }));
    //console.log(JSON.stringify(myObject, null, 4));
    //console.dir(myObject,{depth:null})
    console.log('*** ' + util.inspect(myObject, false, null, true /* enable colors */));
};

module.exports = {
    properties,
    debug,
    inspect
}
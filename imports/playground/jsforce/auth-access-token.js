'use strict';
var jsforce = require('jsforce');
var program = require('commander');
program
    .version('1.0', '-v, --version')
    .option('-e, --env <environment>', 'Environement define in your build.properties')
    .parse(process.argv);
//console.log('*** process.argv.length=' + process.argv.length);
if (process.argv.length != 4) return program.help();
//if (program.args.length==0) program.help();

var myutils = require('../../utils/myutils.js');

var conn = new jsforce.Connection({
    serverUrl: myutils.properties.get(`sf.${program.env}.serverUrl`),
    accessToken: myutils.properties.get(`sf.${program.env}.sessionId`)
});
conn.query('SELECT Id, Name FROM Account', function (err, res) {
    if (err) {
        return console.error(err);
    }
    console.log(res);
});


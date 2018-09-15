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

const conn = new jsforce.Connection({
    instanceUrl: myutils.properties.get(`sf.${program.env}.serverUrl`),
    sessionId: myutils.properties.get(`sf.${program.env}.sessionId`),
    logLevel : "DEBUG"
});


    conn.query('SELECT Id, Name FROM Account', function (err, res) {
        if (err) {
            return console.error(err);
        }
        console.log(res);
    });



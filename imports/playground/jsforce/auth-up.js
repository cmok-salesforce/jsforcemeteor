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

const username = myutils.properties.get(`sf.${program.env}.username`);
const password = myutils.properties.get(`sf.${program.env}.password`);

var conn = new jsforce.Connection({
    loginUrl: 'https://test.salesforce.com',
    logLevel: "DEBUG"
});

conn.login(username, password, function (err, userInfo) {
    if (err) { console.log(err) }
    console.log('you are connected to ');
    console.log(userInfo);
    /*
    conn.query('SELECT Id, Name FROM Account', function (err, res) {
        if (err) {
            return console.error(err);
        }
        console.log(res);
    }); */
    console.log('conn.accessToken=' + conn.accessToken);
    console.log('conn.instanceUrl=' + conn.instanceUrl);
});

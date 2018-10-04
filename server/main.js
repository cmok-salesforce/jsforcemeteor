require('dotenv').config({ path: `${process.env.PWD}/.env` });

import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/scorekeep/players.js';

/*
console.log('*** meteor server run');
console.log('*** __filename=' + __filename);
console.log('*** __dirname=' + __dirname);
console.log('*** PWD=' + `${process.env.PWD}/.env`);


console.log('*** METEOR_PUBLIC_KEY_FULLPATH_LOCATION=' + process.env.METEOR_PUBLIC_KEY_FULLPATH_LOCATION);
process.exit();

meteor run--port
*/

console.log('*** HTTPS=' + process.env.METEOR_HTTPS_PORT);
console.log('*** KEY=' + process.env.METEOR_PRIVATE_KEY_FULLPATH_LOCATION);
//process.exit();

if (Meteor.isServer) {
  SSL(process.env.METEOR_PRIVATE_KEY_FULLPATH_LOCATION, process.env.METEOR_PUBLIC_KEY_FULLPATH_LOCATION, process.env.METEOR_HTTPS_PORT);
}

Meteor.startup(() => {
  //return array of documents
  console.log(Players.find().fetch());
});

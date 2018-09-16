import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players.js';


if (Meteor.isServer) {
  //SSL('/home/chenda/Dropbox/code/nodejs/meteor/jsforcemeteor/private/localhost.key','/home/chenda/Dropbox/code/nodejs/meteor/jsforcemeteor/private/localhost.cert', 3443);
  SSL('/Users/cmok/Dropbox/code/nodejs/meteor/jsforcemeteor/private/localhost.key','/Users/cmok/Dropbox/code/nodejs/meteor/jsforcemeteor/private/localhost.cert', 3443);
}

Meteor.startup(() => {
  //return array of documents
  console.log(Players.find().fetch());

});

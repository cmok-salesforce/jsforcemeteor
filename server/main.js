import { Meteor } from 'meteor/meteor';
// somewhere within your server code

if (Meteor.isServer) {
  //SSL('/home/chenda/Dropbox/code/nodejs/meteor/jsforcemeteor/private/localhost.key','/home/chenda/Dropbox/code/nodejs/meteor/jsforcemeteor/private/localhost.cert', 3443);
  SSL('/Users/cmok/Dropbox/code/nodejs/meteor/jsforcemeteor/private/localhost.key','/Users/cmok/Dropbox/code/nodejs/meteor/jsforcemeteor/private/localhost.cert', 3443);
}

Meteor.startup(() => {
  // code to run on server at startup
});

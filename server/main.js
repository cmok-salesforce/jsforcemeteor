require('dotenv').config({ path: `${process.env.PWD}/.env` });

import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  SSL(process.env.METEOR_PRIVATE_KEY_FULLPATH_LOCATION, process.env.METEOR_PUBLIC_KEY_FULLPATH_LOCATION, process.env.METEOR_HTTPS_PORT);
}

function handleTodosApp() {
  //loaded globally
  //import { Tasks } from '../imports/api/todos/tasks';
  //loaded when needed, but require .default
  const Tasks = require('../imports/api/todos/tasks').default;
  console.log("*** Tasks in db server:" + JSON.stringify(Tasks.find().fetch(), undefined, 2));
}

Meteor.startup(() => {
  console.log('*** SERVER: Meteor.startup ' + new Date());
  handleTodosApp();
});
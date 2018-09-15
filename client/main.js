console.log('*** log from client/main.js');
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render('HELLO', document.getElementById('render-target'));
});
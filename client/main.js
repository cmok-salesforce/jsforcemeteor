import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players, calculatePlayerPositions } from '../imports/api/scorekeep/players.js';
import { Tracker } from 'meteor/tracker';

import App from '../imports/ui/scorekeep/App.js';
//import { greetUser, writeFileSync } from '../imports/helpers/fileHelper.js';
var fileHelper = require('../imports/helpers/fileHelper.js');

Meteor.startup( () => {
  //DDP Synch with MonDB on server side 
  Tracker.autorun( () => {
    //with sorting: first {} == ALL records, second is sort criteria
    let players = Players.find({}, {sort:{score: -1}}).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    console.log('*** playerList:', players);
    let title = 'Score Keep';

    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
  });

});

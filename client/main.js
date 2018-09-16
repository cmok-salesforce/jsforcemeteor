import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players.js';
import { Tracker } from 'meteor/tracker';
import TitleBar from '../imports/ui/TitleBar.js';
import AddPlayer from '../imports/ui/AddPlayer.js';
import Player from '../imports/ui/Player.js';
import PlayerList from '../imports/ui/PlayerList.js';
//import { greetUser, writeFileSync } from '../imports/helpers/fileHelper.js';
var fileHelper = require('./../imports/helpers/fileHelper.js');

Meteor.startup( () => {
  //DDP Synch with MonDB on server side 
  Tracker.autorun( () => {
    let players = Players.find().fetch();
    console.log('*** playerList:', players);
    let title = 'Score Keep';
    let subtitle = 'Created by Andrew Mead.'
    let jsx = (
      <div>
        <TitleBar title={title} subtitle={subtitle}/>
        <PlayerList players={players}/>
        <AddPlayer score={10}/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
    });

});

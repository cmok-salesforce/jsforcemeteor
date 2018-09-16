import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players.js';
import { Tracker } from 'meteor/tracker';
import TitleBar from '../imports/ui/TitleBar.js';
import AddPlayer from '../imports/ui/AddPlayer.js';
import Player from '../imports/ui/Player.js';
//import { greetUser, writeFileSync } from '../imports/helpers/fileHelper.js';
var fileHelper = require('./../imports/helpers/fileHelper.js');

const renderPlayers =  (playersList) => {
  return playersList.map( (player) => {
    //parenthesis allow jsx on multiple line for better formatting
    //WARNING: Each child in an array or iterator should have a unique "key" prop.
    return <Player key={player._id} player={player}/>;
  });
};



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
        {renderPlayers(players)}
        <AddPlayer score={10}/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
    });

});

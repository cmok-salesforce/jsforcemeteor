import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players.js';
import { Tracker } from 'meteor/tracker';
//import { greetUser, writeFileSync } from '../imports/helpers/fileHelper.js';
var fileHelper = require('./../imports/helpers/fileHelper.js');

const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

const handleSubmit = function (e) {
  console.log('*** event:', e);
  console.log('*** greetUser:', fileHelper.greetUser());
  
  // TODO: Uncaught TypeError: Cannot read property 'value' of undefined
  let playerName = e.target.playerName.value;
  console.log('Adding player :', playerName);
  //remove from UI player input text
  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });  
  } 
  // preventing page post & full page reload
  // TODO: Uncaught TypeError: Cannot read property 'target' of undefined
  // SOL: we must call handleSubmit(this.event) to pass the vent object to the function call
  e.preventDefault();



} 

Meteor.startup(function () {
  //DDP Synch with MonDB on server side 
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    console.log('*** playerList:', players);
    let title = 'Score Keep';
    let name = 'Mike';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second p.</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
    });

});

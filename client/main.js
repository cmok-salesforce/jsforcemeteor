import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players.js';
import { Tracker } from 'meteor/tracker';
//import { greetUser, writeFileSync } from '../imports/helpers/fileHelper.js';
var fileHelper = require('./../imports/helpers/fileHelper.js');

const renderPlayers =  (playersList) => {
  return playersList.map( (player) => {
    //parenthesis allow jsx on multiple line for better formatting
    return (
    <p key={player._id}>
      {player.name} has {player.score} point(s).
      <button onClick={() => Players.update(player._id, { $inc: { score: -1 } })}>-1</button>
      <button onClick={() => Players.update(player._id, { $inc: { score: 1 } })}>+1</button>
      <button onClick={() => Players.remove(player._id)}>X</button>
    </p>
    );
  });
};

const handleSubmit =  (e) => {
  console.log('*** event:', e);
  console.log('*** greetUser:', fileHelper.greetUser());
  // preventing page post & full page reload
  // TODO: Uncaught TypeError: Cannot read property 'target' of undefined
  // SOL: we must call handleSubmit(this.event) to pass the vent object to the function call
  e.preventDefault();
  
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

} 

Meteor.startup( () => {
  //DDP Synch with MonDB on server side 
  Tracker.autorun( () => {
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
        {/* WARNING: do not provide () after the handleSubmit, otherwise event is not defined */}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
    });

});

import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players.js';
import { Tracker } from 'meteor/tracker';


const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

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
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
    });
    Players.insert({
      name: 'Chenda',
      score: 88
    });
});

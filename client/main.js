import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players.js';
import { Tracker } from 'meteor/tracker';

Tracker.autorun(()=> {
  console.log('*** playerList:', Players.find().fetch());  
});

const players = [{
  _id: '1',
  name: 'Lauren',
  score: 102
}, {
  _id: '3',
  name: 'Andrew',
  score: -12
}];

const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

Meteor.startup(function () {
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

import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players, calculatePlayerPositions } from '../imports/api/scorekeep/players.js';
import { Tracker } from 'meteor/tracker';

//import {Router, Route, browserHistory} from 'react-router';
import { BrowserRouter, Route, Switch, Redirect, browserHistory } from 'react-router-dom'


//short-lnk
import Signup from '../imports/ui/short-lnk/Signup';
import Link from '../imports/ui/short-lnk/Link';
import NotFound from '../imports/ui/short-lnk/NotFound';
import Login from '../imports/ui/short-lnk/Login';


import App from '../imports/ui/scorekeep/App.js';
//import { greetUser, writeFileSync } from '../imports/helpers/fileHelper.js';
var fileHelper = require('../imports/helpers/fileHelper.js');

const routes = (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route path="/links" component={Link} />
      <Route path="/signup" component={Signup} />
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);


Meteor.startup( () => {
  //DDP Synch with MonDB on server side 
  Tracker.autorun( () => {
    //with sorting: first {} == ALL records, second is sort criteria
    let players = Players.find({}, {sort:{score: -1}}).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    console.log('*** playerList:', players);
    let title = 'Score Keep';

    //score-keep application
    //ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
    
    //short-lnk application
    //ReactDOM.render(<Signup />, document.getElementById('app'));
    ReactDOM.render(routes, document.getElementById('app'));
  });

});

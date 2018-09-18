import React, { Component } from 'react';
import TitleBar from './TitleBar.js';
import AddPlayer from './AddPlayer.js';
import PlayerList from './PlayerList.js';
import PropTypes from 'prop-types'; // ES6


// App component - represents the whole app
export default class App extends Component {
    render() {
        let subtitle = 'Created by Andrew Mead.'
        return (    
            <div>
                <TitleBar title={this.props.title} subtitle={subtitle} />
                <div className='wrapper'>
                    <PlayerList players={this.props.players} />
                    <AddPlayer score={10} />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
}
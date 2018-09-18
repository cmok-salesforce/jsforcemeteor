import PropTypes from 'prop-types'; // ES6
//var PropTypes = require('prop-types'); // ES5 with npm

import React from 'react';
import Player from './Player.js';

export default class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length===0) {
            return (
                <div className='item'>
                    <p className='item__message--empty'>Add your first player to get started</p>
                </div>
            );
        } else {
            return this.props.players.map((player) => {
                //WARNING: Each child in an array or iterator should have a unique "key" prop.
                return <Player key={player._id} player={player} />;
            });
        }
    }
    render() {
        return (
            <div>
                {this.renderPlayers()}
            </div>
        );
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}
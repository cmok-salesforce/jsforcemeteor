import PropTypes from 'prop-types'; // ES6
import FlipMove from 'react-flip-move'; // ES6
import React from 'react';

//var PropTypes = require('prop-types'); // ES5 with npm

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
                <FlipMove maintainContainerHeight="true">
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}
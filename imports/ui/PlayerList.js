import React from 'react';
import Player from './Player.js';

export default class PlayerList extends React.Component {
    renderPlayers() {
        return this.props.players.map((player) => {
            //parenthesis allow jsx on multiple line for better formatting
            //WARNING: Each child in an array or iterator should have a unique "key" prop.
            return <Player key={player._id} player={player} />;
        });
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
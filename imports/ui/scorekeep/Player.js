import React from 'react';
import { Players } from '../../api/scorekeep/players.js';
import PropTypes from 'prop-types'; // ES6
var fileHelper = require('../../helpers/fileHelper.js');

export default class Player extends React.Component {
    render() {
        return (
                <div key={this.props.player._id} className='item'>
                    {this.props.player.name} has {this.props.player.score} point(s).
                    <button className="button button--round" onClick={() => Players.update(this.props.player._id, { $inc: { score: -1 } })}>-1</button>
                    <button className="button button--round" onClick={() => Players.update(this.props.player._id, { $inc: { score: 1 } })}>+1</button>
                    <button className="button button--round" onClick={() => Players.remove(this.props.player._id)}>X</button>
                </div>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}
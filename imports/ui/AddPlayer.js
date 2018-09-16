import React from 'react';
import { Players } from './../api/players.js';

const handleSubmit = (e) => {
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

export default class AddPlayer extends React.Component {
    render() {
        return (
            <div>
                {/* WARNING: do not provide () after the handleSubmit, otherwise event is not defined 
                Empty arrow function
                */}
                <form onSubmit={ () => {}}>
                    <input type="text" name="playerName" placeholder="Player name" />
                    <button>Add Player</button>
                </form>
            </div>
        );
    }
}
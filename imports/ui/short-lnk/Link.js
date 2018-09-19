import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
//import {  browserHistory } from 'react-router-dom';
//import { browserHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6


import { createBrowserHistory } from 'history';
const browserHistory = createBrowserHistory();


//https://github.com/ReactTraining/react-router/blob/master/FAQ.md#how-do-i-access-the-history-object-outside-of-components

export default class Link extends React.Component{
    onLogout(event) {
        event.preventDefault();
        //browserHistory.push('/');
        //<Redirect push to="/" />
        //this.props.browserHistory.push('/path');
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <p>Your Links</p>
                <button onClick={this.onLogout.bind(this)}>Logout</button>  
            </div>
        );
    }
}

Link.propTypes = {
    history: PropTypes.object.isRequired,
}
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from'react-router-dom';

export default class Login extends React.Component{
    render() {
        return (
            <div>
                <h1>Login to Short Link</h1>
                Login Form Component
                <Link to="/signup">Have an account?</Link>
            </div>
        );
    }
}
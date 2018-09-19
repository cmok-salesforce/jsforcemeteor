import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component{
    render() {
        return (
            <div>
                <h1>Join Short Link</h1>
                Signup Form Component
                <Link to="/">Already Have an account?</Link>
            </div>
        );
    }
}
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from'react-router-dom';

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            error: ''
        };
    }
    handleSubmit(event) {
        event.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        Meteor.loginWithPassword({email}, password, (err) => {
            console.log('Login callback', err);
        })

    }
    render() {
        return (
            <div>
                <h1> Short Link</h1>
                
                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="email" ref="email" name="email" placeholder="Email" />
                    <input type="password" ref="password" name="password" placeholder="Password" />
                    <button>login</button>
                </form>               
                <Link to="/signup">Have an account?</Link>
            </div>
        );
    }
}
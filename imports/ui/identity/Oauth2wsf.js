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
                <h1>Oauth2 Web Server Flow</h1>
                
                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <br/>consumerKey:<br/><input type="consumerKey" ref="consumerKey" name="consumerKey" placeholder="consumerKey: 3MVG9X0xxxxx" />
                    <br/>consumerSecret:<br/><input type="consumerSecret" ref="consumerSecret" name="consumerSecret" placeholder="consumerSecret: 123456789xxxx" />
                    <br/>callbackURI:<br/><input type="callbackURI" ref="callbackURI" name="callbackURI" placeholder="callbackURI : https://localhost/callback" />
                    <br/>loginURL:<br/><input type="loginURL" ref="loginURL" name="loginURL" placeholder="callbackURI : https://test.salesforce.com" />
                    <br /><button onClick={undefined}>GetUserProfile</button>
                </form>               
                <Link to="/signup">Have an account?</Link>
            </div>
        );
    }
}
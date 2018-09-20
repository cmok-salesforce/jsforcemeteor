import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {Accounts} from 'metor/accounts-base';

export default class Signup extends React.Component{
    constructor(props) {
     super(props);
     this.state = {
        count: 0,
        error: ''
     };
    }
    increment() {
        this.setState(
            { count: this.state.count + 1 }
        )
    }
    decrement() {
        this.setState(
            { count: this.state.count - 1 }
        )
    }
    handleSubmit(event) {
        event.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Accounts.createUser({email, password}, (err) => {
            console.log('Signup callback', err);
        });
        this.setState({ 
            error: 'Something went wrong.' 
        })
    }
    render() {
        return (
            <div>
                <h1>Join Short Link</h1>
                {this.state.error ? <p>{this.state.error}</p>:undefined} 
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="email" ref="email" name="email" placeholder="Email"/>
                    <input type="password" ref="password" name="password" placeholder="Password"/>
                    <button>Create Account</button>
                </form>               
                <button onClick={this.increment.bind(this)}>count++</button>
                <button onClick={this.decrement.bind(this)}>count--</button>
                <Link to="/">Already Have an account?</Link>
            </div>
        );
    }
}
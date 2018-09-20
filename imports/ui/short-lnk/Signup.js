import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component{
    constructor(props) {
     super(props);
     this.state = {
        count: 0
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
    render() {
        return (
            <div>
                <h1>Join Short Link</h1>
                Signup Form Component
               <p> {this.state.count} </p>
                <button onClick={this.increment.bind(this)}>count++</button>
               <button onClick={this.decrement.bind(this)}>count--</button>
                <Link to="/">Already Have an account?</Link>
            </div>
        );
    }
}
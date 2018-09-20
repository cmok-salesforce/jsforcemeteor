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
    render() {
        return (
            <div>
                <h1>Join Short Link</h1>
                Signup Form Component
               <p> {this.state.count} </p>
               <button onClick={()=>{this.setState({count: this.state.count +1})}}>count++</button>
                <Link to="/">Already Have an account?</Link>
            </div>
        );
    }
}
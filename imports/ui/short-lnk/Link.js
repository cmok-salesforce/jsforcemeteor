import React from 'react';
import PropTypes from 'prop-types'; // ES6

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
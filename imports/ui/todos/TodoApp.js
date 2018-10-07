import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Task from './Task.js';
import {Tasks} from '../../api/todos/tasks';

// App component - represents the whole app
class TodoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
        };
    }


    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Tasks.insert({
            text,
            createdAt: new Date(), // current time
        });

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    getTasks1() {
        return [
            { _id: 1, text: 'This is task 1' },
            { _id: 2, text: 'This is task 2' },
            { _id: 3, text: 'This is task 3' },
        ];
    }

    getTasks() {
         return tasks.map((task) => {
             return task;
         });
    }

    toggleHideCompleted() {
        this.setState({
            hideCompleted: !this.state.hideCompleted,
        });
    }

    renderTasks() {
        //return this.getTasks().map((task) => (
        let filteredTasks = this.props.tasks;
        if (this.state.hideCompleted) {
            filteredTasks = filteredTasks.filter(task => !task.checked);
        }
        return filteredTasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        console.log(this.props.tasks);
        return (
            <div className="container">
                <header>
                    <h1>Todo List ({this.props.incompleteCount})</h1>
                </header>
                <label className="hide-completed">
                    <input
                        type="checkbox"
                        readOnly
                        checked={this.state.hideCompleted}
                        onClick={this.toggleHideCompleted.bind(this)}
                    />
                    Hide Completed Tasks
                </label>                
                {/* Adding form */}
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                    <input
                        type="text"
                        ref="textInput"
                        placeholder="Type to add new tasks"
                    />
                </form>
                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('tasks');
    return {
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
        incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    };
})(TodoApp);
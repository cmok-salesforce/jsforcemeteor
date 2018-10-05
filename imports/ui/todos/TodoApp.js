import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Task from './Task.js';
import {Tasks} from '../../api/todos/tasks';

// App component - represents the whole app
class TodoApp extends Component {
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

    renderTasks() {
        //return this.getTasks().map((task) => (
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        console.log(this.props.tasks);
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

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
        tasks: Tasks.find({}).fetch(),
    };
})(TodoApp);
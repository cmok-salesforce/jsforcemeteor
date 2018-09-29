
var TaskList = React.createClass({
    render: function() {
        var displayTask = function (task) {
            return <li>{task}</li>
        };
        var displayTask2 =  (task) =>  <li>{task}</li>;
        return (
            <div>
                <ul>
                    {this.props.items.map(displayTask2)}
                </ul>
            </div>
        );
    }
});
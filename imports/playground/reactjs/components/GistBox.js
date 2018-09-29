var GistBox = React.createClass({
    getInitialState: function () {
        return {
            gists: [{username:"chenda mok", url:"https://www.google.com"}],
        }
    },
    addGist: function(username) {
        var url = `https://api.github.com/users/${username}/gists`;
        //use JQuery or any ajax call
        $.get(url, function(result) {
            //console.log(result);
            console.log(this);
            var username = result[0].owner.login;
            var url = result[0].html_url;
            var gists = this.state.gists.concat({username, url});
            this.setState({gists});
        }.bind(this)); //cf console log for debugging
    },
    render: function () {
        var newGist = function(gist) {
            return  <Gist username={gist.username} url={gist.url}/>
        };
        return (
            <div>
                <h1>GistBox</h1>
                <GistAddForm onAdd={this.addGist}/>
                {this.state.gists.map(newGist)}

            </div>
        );
    }
});
React.render(<GistBox />, document.querySelector('#app'));      
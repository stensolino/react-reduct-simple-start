const Greeting = React.createClass({
    getInitialState: function () {
        return {message: 'Hello from Greeting!'};
    },
    clickMe: function () {
        this.setState({message: this.state.message + ' :) '})
    },
    render: function () {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <input type="button" onClick={this.clickMe} value="Click Me"/>
            </div>
        )
    }
});
ReactDOM.render(<Greeting/>, document.getElementById('app'));
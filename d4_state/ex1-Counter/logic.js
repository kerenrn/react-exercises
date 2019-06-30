class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        // let newCount = this.state.counter++;
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.incrementCounter}>increment</button>
                <span>{this.state.counter}</span>
            </div>
        )
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById("root")
);
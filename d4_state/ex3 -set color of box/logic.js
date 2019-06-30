class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "",
        };
        this.setColor = this.setColor.bind(this);
    }

    setColor(event) {
        console.log(event.target.text);
        this.setState({ 
            color: event.target.textContent
        });
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.setColor}>Blue</button>
                <button onClick={this.setColor}>Green</button>
                <button onClick={this.setColor}>Orange</button>
                <div className={this.state.color}></div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
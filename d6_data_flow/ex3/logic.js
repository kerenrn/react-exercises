class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxColor: "",
        };
        this.updateBoxColor = this.updateBoxColor.bind(this);
    }

    updateBoxColor(color) {
        this.setState({ 
            boxColor: color
        });
    }

    render() {
        return (
            <div className="container">
                <Button handleClick={this.updateBoxColor} text="Blue"/>
                <Button handleClick={this.updateBoxColor} text="Green"/>
                <Button handleClick={this.updateBoxColor} text="Orange"/>
                <div className={this.state.boxColor}></div>
            </div>
        )
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.sendColor = this.sendColor.bind(this);
    }
    sendColor(event) {
        this.props.handleClick(event.target.textContent);
    }
    render() {
        return (
            <button onClick={this.sendColor}>{this.props.text}</button>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
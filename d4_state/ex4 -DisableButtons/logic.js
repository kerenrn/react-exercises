class ColorButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,
        };
        this.disableButton = this.disableButton.bind(this);
    }

    disableButton() {
        let newState = this.state.isDisabled ? false : true;
        this.setState({ isDisabled: newState });
    }

    render() {
        let classname = this.state.isDisabled ? "disabled" : "";
        return (
            <button onClick={this.disableButton} className={classname}>{this.props.color}</button>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <ColorButton color="blue" />
                <ColorButton color="purple" />
                <ColorButton color="green" />
                <ColorButton color="red" />
                <ColorButton color="pink" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
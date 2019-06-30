class BoxWithButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
        this.showBox = this.showBox.bind(this);
    }

    showBox() {
        let newState = this.state.isVisible ? false : true;
        this.setState({ isVisible: newState });
    }

    render() {
        let classname = this.state.isVisible ? "box" : "box hidden";
        return (
            <div className="container">
                <button onClick={this.showBox}>Show/hide</button>
                <div className={classname}></div>
            </div>
        )
    }
}

ReactDOM.render(
    <BoxWithButton />,
    document.getElementById("root")
);
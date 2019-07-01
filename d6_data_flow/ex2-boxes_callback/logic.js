class Box extends React.Component {
    constructor(props) {
        super(props);
        this.sendColor = this.sendColor.bind(this);
    }
    render() {
        return (
            <div className={`box ${this.props.color}`} onClick={this.sendColor}>{this.props.children}</div>
        )
    }
    sendColor(event) {
        event.stopPropagation();
        this.props.handleClick(this.props.color);
    }
}


class Frame extends React.Component {
    render() {
        return (
            <div className={`frame ${this.props.color}`}>{this.props.children}</div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            frameColor: ""
        }
        this.updateFrameColor = this.updateFrameColor.bind(this);
    }
    updateFrameColor(color) {
        this.setState({
            frameColor: color, 
        })
    }
    render() {
        return (
            <Frame color={this.state.frameColor}>
                <Box handleClick={this.updateFrameColor} color="lightgreen">
                    <Box handleClick={this.updateFrameColor} color="skyblue">
                        <Box handleClick={this.updateFrameColor} color="Pink">
                            <Box handleClick={this.updateFrameColor} color="lavender" />
                            <Box handleClick={this.updateFrameColor} color="lavender" />
                        </Box>
                    </Box>
                </Box>
            </Frame>
        )
    }
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();
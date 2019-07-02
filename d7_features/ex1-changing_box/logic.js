class Box extends React.Component {
    constructor(props) {
        super(props);
        // this.colorsArr = ["red", "blue", "yellow", "green", "purple", "orange"];
        // this.state = {
        //     color: colorsArr[0],
        // }
        this.state = {
            color: "red",
            shape: "square",
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        console.log("")
        this.interval1 = setInterval(() => {
            this.setState({
                color: (this.state.color === "red") ? "blue" : "red",
                // color: this.colorsArr[Math.floor(Math.random() * 6)],
            })
        }, 500);
        setTimeout(() => {
            this.setState({
                shape: "circle",
            })
        }, 2500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className={`${this.state.color} ${this.state.shape}`}></div>
        )
    }
}

ReactDOM.render(
    <Box />,
    document.getElementById("root"));

setTimeout(() => ReactDOM.unmountComponentAtNode(document.getElementById("root")), 5000);


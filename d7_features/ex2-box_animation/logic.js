class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classname: "",
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                classname: "pop",
            })
        }, 1000);
    }

    render() {
        return (
            <div className={`box ${this.state.classname}`}></div>
        )
    }
}


ReactDOM.render(
    <Box />,
    document.getElementById("root")
);
setTimeout(() => ReactDOM.unmountComponentAtNode(document.getElementById("root")), 5000);
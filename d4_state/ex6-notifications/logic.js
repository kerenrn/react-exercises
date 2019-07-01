class BoxWithButton1 extends React.Component {
    constructor(props) {
        super(props);
        this.showBox = this.showBox.bind(this);
        this.prop.isVisible;
    }

    showBox() {
        let toggleVisibility = this.prop.isVisible ? false : true;
        this.props.isVisible = toggleVisibility;
    }

    render() {
        let classname = this.prop.isVisible ? "box" : "box hidden";
        return (
            <div className="container">
                <button onClick={this.showBox}>Show/hide</button>
                <div className={classname}></div>
            </div>
        )
    }
}

// class BoxWithButton2 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isVisible: false,
//         };
//         this.showBox = this.showBox.bind(this);
//     }

//     showBox() {
//         let newState = this.state.isVisible ? false : true;
//         this.setState({ isVisible: newState });
//     }

//     render() {
//         let classname = this.state.isVisible ? "box" : "box hidden";
//         return (
//             <div className="container">
//                 <button onClick={this.showBox}>Show/hide</button>
//                 <div className={classname}></div>
//             </div>
//         )
//     }
// }

class App extends React.Component {
    render () {
        return (
            <div>
                <BoxWithButton1 />
                {/* <BoxWithButton2 /> */}
            </div>
        )
        }

}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
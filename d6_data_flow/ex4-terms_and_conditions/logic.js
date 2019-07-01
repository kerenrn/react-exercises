class App extends React.Component {
    constructor(props) {
        super(props);
        this.counter = 0;
        this.state = {
            classname: "disabled",
        }
        this.updateButton = this.updateButton.bind(this);
    }
    updateButton(isChecked) {
        if (isChecked) {
            this.counter++;
        } else {
            this.counter--;
        }
        console.log(this.counter);
        if (this.counter === 2) {
            this.setState({
                classname: "",
            })
        } else {
            this.setState({
                classname: "disabled",
            })
        }
    }

    render() {
        return (
            <div className="container">
                Bla Bla Blahhh
            <Checkbox text="I have read the conditions" handleChange={this.updateButton} />
            <Checkbox text="I accept all the terms" handleChange={this.updateButton} />
            <Button classname={this.state.classname} text="Next" />
            </div>
            
        )
    }
}

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.sendStatus = this.sendStatus.bind(this);
    }

    sendStatus(event) {
        this.props.handleChange(event.target.checked);
    }

    render() {
        return(
            <div>
            <input type="checkbox" onChange={this.sendStatus}></input>
            {this.props.text}
            </div>
        )
    }
}

class Button extends React.Component {
    
    render() {
        return (
            <button className={this.props.classname}>{this.props.text}</button>
        )
    }
    
}



ReactDOM.render(
    <App />,
    document.getElementById("root")
);
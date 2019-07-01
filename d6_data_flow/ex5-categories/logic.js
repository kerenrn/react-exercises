class App extends React.Component {
    constructor(props) {
        super(props);
        this.subcategories = [["red", "blue", "yellow"], ["square", "triangle", "circle"], [1, 2, 3]];
        this.categories = ["colors", "shapes", "numbers"];
        this.state = {
            subcategory: this.subcategories[0],
        }
        this.updateSubcat = this.updateSubcat.bind(this);
    }
    updateSubcat(index) {
        this.setState({
            subcategory: this.subcategories[index],
        })
    }

    render() {
        return (
            <div>
                <DropdownList title="Category" options={this.categories} handleChange={this.updateSubcat}/>
                <DropdownList title="Sub-category" options={this.state.subcategory} />
            </div>
        )
    }
}

class DropdownList extends React.Component {
    constructor(props) {
        super(props);
        this.sendIndex = this.sendIndex.bind(this);
    }
    sendIndex(e) {
        this.props.handleChange(this.props.options.indexOf(e.target.value));
    }
    render() {
        return (
            <div className="dropdown container">
                <label htmlFor={this.props.title}>{this.props.title}</label>
                <select onChange={this.sendIndex}>
                    <option value={this.props.options[0]}>{this.props.options[0]}</option>
                    <option value={this.props.options[1]}>{this.props.options[1]}</option>
                    <option value={this.props.options[2]}>{this.props.options[2]}</option>
                </select>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
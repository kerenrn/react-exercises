class Step extends React.Component {
    render() {
        return (
            <div id={`s${this.props.index}`} className="step">
                <div className="photo"></div>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <Breadcrumbs activeIndex={this.props.index} />
            </div>
        )
    }
}

class Breadcrumbs extends React.Component {
    render() {
        return (
            <div className="breadcrumbs">
                <span classname={this.props.index === 1 ? "isActive" : ""}></span>
                <span classname={this.props.index === 2 ? "isActive" : ""}></span>
                <span classname={this.props.index === 3 ? "isActive" : ""}></span>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Step index="1" title="Ready to Travel!" description="Choose your destination, plan your trip. Pich the best place for your holiday." />
                <Step index="2" title="Select the Date" description="Choose your destination, plan your trip. Pich the best place for your holiday." />
                <Step index="3" title="Feels Like Home" description="Choose your destination, plan your trip. Pich the best place for your holiday." />
            </div>
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
const STEPS_NUMBER = 3;

class Step extends React.Component {
    generateBreadcrumbs(indexOn, length) {
        let result = [];
        for (let i = 0; i < length; i++) {
            let breadcrumb = <div className={(i === indexOn) ? "breadcrumb on" : "breadcrumb"} />
            result.push(breadcrumb);
        }
    }

    render() {
        let breadcrumbs = generateBreadcrumbs(this.props.number, STEPS_NUMBER);
        return (
            <div id={this.props.number}>
                <div classname="photo"></div>
                <h4>{title}</h4>
                <p>{description}</p>
                {breadcrumbs}
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <Step number="1" title="Ready to Travel!" description="Choose your destination, plan your trip. Pich the best place for your holiday." />
                <Step number="2" title="Select the Date" description="Choose your destination, plan your trip. Pich the best place for your holiday." />
                <Step number="3" title="Feels Like Home" description="Choose your destination, plan your trip. Pich the best place for your holiday." />
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
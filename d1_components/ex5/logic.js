class App extends React.Component {
    render() {
        return (
            <div>
                <Button/>
            </div>
        )
    }
}
class Button extends React.Component {
    print() {
        document.getElementById("show").innerHTML = "Hello World";
    }
    render() {
        return (
            <div>
            <button onClick={this.print}>Click</button>
            <div id="show"></div>
            </div>
        );
        
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
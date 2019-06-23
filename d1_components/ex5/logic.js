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
    render() {
        return (
            <button>Click</button>
        );
        
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
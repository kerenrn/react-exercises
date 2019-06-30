class Box extends React.Component {
    render() {
        

        return (
            <div className={this.props.color}>{this.props.children}</div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Box color="lightgreen">
                <Box color="skyblue">
                    <Box color="Pink">
                        <Box color="lavender"/>
                        <Box color="lavender"/>
                    </Box>
                </Box>
            </Box>
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
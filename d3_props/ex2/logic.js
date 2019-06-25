class Box extends React.Component {
    render() {
        let mood = this.props.mood;
        // let text = this.props.text;
        return (
            <div className={mood}>{mood}</div>
        );

    }
}




class App extends React.Component {
    render() {
        return (
            <div>
                <Box mood="fresh" />
                <Box mood="calm" />
                <Box mood="adventurous" />
                <Box mood="happy"/>
            </div>
        );
    }
}
function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();
class Title extends React.Component {
   
    render() {
        var style = {
            "fontFamily": this.props.font
        };
        let text = this.props.text;
        return (
            <h2 style={style}>{text}</h2>
        );
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <Title text="If I Rule the DOM" font="cursive" />
                <Title text="Talk is cheap. Show me the code" font="fantasy" />
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
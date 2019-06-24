function render(data) {
    ReactDOM.render(
        <div>
            <a src={data.linkAddress}>go to {data.linkText}</a>
            <input id="slider" type="range" min={data.min - 1} max={data.max * 2} step="2" />
            <button id="click" style={data}>click me</button>
        </div>,
        document.getElementById("root")
    );


}
var data = {
    linkAddress: "https://www.google.com/",
    linkText: "google",
    min: -5,
    max: 5,
    color: "maroon",
    "font-weight": "bold",
    buttonText: "click me"
};
render(data)


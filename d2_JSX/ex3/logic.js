class ShowNumbers extends React.Component {
    constructor() {
        super();
        this.num = 13;
        this.printNumbers = this.printNumbers.bind(this);
    }

    printNumbers() {
        let result = "";
        for (let i = 0; i < this.num; i++) {
            result += ` ${i}`;
        }
        document.getElementById("show").innerHTML = result;

    }

    render() {

        return (
            <div>
                <button onClick={this.printNumbers}>Show Numbers</button>
                <div id="show"></div>
            </div>
        );
    }
}



ReactDOM.render(
    <ShowNumbers />,
    document.getElementById("root")
);
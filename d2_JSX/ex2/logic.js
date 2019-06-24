class WinOrLose extends React.Component {
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    render() {
        let randNum = this.getRandomInt(1, 10);
        let result = (randNum > 5) ? "You won" : "You lost";
        return (
            <div>
                {result}
            </div>
        );
    }
}

ReactDOM.render(
    <WinOrLose />,
    document.getElementById("root")
);
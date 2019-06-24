class Factorial extends React.Component {
    factorial(num) {
        if (num === 0) {
            return 1;
        } else {
            return (num * this.factorial(num-1));
        }
    }
    render() {
        let result = this.factorial(5);
        return (
            <div>
                <h4> The factorial of 5 is:</h4>
            {result}
            </div>
        );
    }

}


ReactDOM.render(
    <Factorial />,
    document.getElementById("root")
);
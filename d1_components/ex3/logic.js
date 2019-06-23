class App extends React.Component {
    render() {
        return (
            <Quiz />
        );
    }
}
class Quiz extends React.Component {
    render() {
        return (
            <div className="quiz">
                <QuizTitle/>
                <Q1 />
                <Q2 />
            </div>
        );
    }
}
class QuizTitle extends React.Component {
    render() {
        return (
            <h1>How Do You Like Front End?</h1>
        );
    }
}
class Q1 extends React.Component {
    render() {
        return (
            <div>
                <Q1Title />
                <Q1Input />
            </div>
        );
    }
}
class Q1Title extends React.Component {
    render() {
        return (
            <p className="question">
                How Much you love front end?
            </p>
        );
    }
}
class Q1Input extends React.Component {
    render() {
        return (
            <input className="range-slider" type="range" min="1" max="100" value="50"></input>
        );
    }
}
class Q2 extends React.Component {
    render() {
        return (
            <div>
                <Q2Title />
                <Q2Input />
            </div>
        );
    }
}
class Q2Title extends React.Component {
    render() {
        return (
            <p className="question">
                What is your favourite front end feature/topic?
            </p>
        );
    }
}
class Q2Input extends React.Component {
    render() {
        return (
            <input className="text-box" type="text"></input>
        );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById("root")
);
class UnorderedList extends React.Component {
    render() {
        return (
            <ul>
                <li>first</li>
                <li>second</li>
                <li>third</li>
                <li>fourth</li>
            </ul>
        );
    }
}


ReactDOM.render(
    <UnorderedList/>,
    document.getElementById("root")
);
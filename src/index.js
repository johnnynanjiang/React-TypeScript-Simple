import React from "react";
import ReactDOM from "react-dom";

class Welcome extends React.Component {
    render() {
        return <h1>Hello world from React TypeScript Simple</h1>;
    }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));

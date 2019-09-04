import React from "react";
import ReactDOM from "react-dom";

class Welcome extends React.Component {
    render() {
        return <h1>"Hello World!" from React TypeScript Simple v0.02</h1>;
    }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));

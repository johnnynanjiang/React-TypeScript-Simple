import React from "react";
import ReactDOM from "react-dom";

import { AccountRepository } from "./component/AccountRepository";

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>"Hello World!" from React TypeScript Simple v0.02</h1>
                <AccountRepository />
            </div>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));

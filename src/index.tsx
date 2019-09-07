import React from "react";
import ReactDOM from "react-dom";

import { AccountsComponent } from "./component/AccountsComponent";

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>"Hello World!" from React TypeScript Simple v0.02</h1>
                <AccountsComponent />
            </div>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));

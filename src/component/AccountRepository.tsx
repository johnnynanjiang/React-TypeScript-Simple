import React, { Component } from 'react';

import { Account } from '../model/Account';

export class AccountRepository extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accounts: []
        };
    }

    componentDidMount() {
        this.setState(
            { accounts: [new Account()] }
        );
    }

    render() {
        return (
            <div>I'm an Account Repository</div>
        );
    }
}

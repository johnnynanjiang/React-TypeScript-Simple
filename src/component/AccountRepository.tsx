import React, { Component } from 'react';

import { Account } from '../model/Account';

interface IProps {

}

interface IState {
    accounts: Account[];
}

export class AccountRepository extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            accounts: []
        };
    }

    componentDidMount() {
        this.setState(
            {
                accounts: [
                    {
                        id: "id 1",
                        accountName: "account name 1",
                        institution: 'institution 1',
                        currency: 'AUD',
                        balance: 1.00
                    },
                    new Account()
                ]
            }
        );
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.accounts.map(account =>
                            (
                                <li>
                                    {account.id}, {account.accountName}, {account.institution}, {account.currency}, {account.balance}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

import React, { Component } from 'react';

import { Account } from '../model/Account';

interface IProps {

}

interface IState {
    accounts: Account[];
    isLoading: Boolean;
    error: Error | null;
}

const API_URL = "https://raw.githubusercontent.com/johnnynanjiang/MoneytreeLight/master/app/src/main/assets/json/accounts.json";

export class AccountRepository extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            accounts: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(API_URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`{response.status} - {response.statusText}`);
                }
            })
            .then(json => this.updateAccounts(json.accounts))
            .catch(error => this.updateError(error));
    }

    updateAccounts(accounts: Account[]) {
        this.setState({ accounts: accounts, isLoading: false });
    }

    updateError(error: any) {
        this.setState({ isLoading: false, error: error });
    }

    render() {
        const { accounts, isLoading, error } = this.state;

        if (isLoading) {
            return <p>Loading accounts ...</p>;
        }

        if (error) {
            return <p>Error: {error.message}</p>;
        }

        return (
            <div>
                <ul>
                    {
                        accounts.map(account =>
                            (
                                <li>
                                    {account.id}, {account.name}, {account.institution}, {account.currency}, {account.balance}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

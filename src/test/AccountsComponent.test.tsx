import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { AccountsComponent } from '../component/AccountsComponent';

let container: any = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("test AccountsComponent", () => {
    it("renders", () => {
        act(() => {
            render(<AccountsComponent />, container);
        });

        expect(container.textContent).toBe("Loading accounts ...");
    });
})
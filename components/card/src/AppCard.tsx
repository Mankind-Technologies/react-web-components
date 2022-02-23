import ReactDOM from 'react-dom';
import React from 'react';
import {Card} from "./Card";

export class AppCard extends HTMLElement {
    constructor() {
        super();
    }
    private mountPoint;
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {
            this.unmount();
            this.mount();
        }
    }
    mount() {
        const name = this.getAttribute('name');
        const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
        ReactDOM.render(<Card url={url} name={name}/> , this.mountPoint);
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(this);
    }
    disconnectedCallback(){
        this.unmount();
    }
    connectedCallback() {
        this.mountPoint = document.createElement('span');
        this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
        this.mount();
    }
}


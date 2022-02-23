import ReactDOM from 'react-dom';
import React from 'react';
import {Card, CardProps} from "./Card";

export class AppCard extends HTMLElement {
    constructor() {
        super();
    }
    private mountPoint;
    private triggerChange: (props:CardProps) => void;

    private LocalWrapper = ({url, name}) => {
        const [props, setProps] = React.useState({url, name});
        this.triggerChange = setProps;
        console.log("Render! ", props);
        return <Card {...props}/>;
    }

    static get observedAttributes() {
        return ['name', 'url'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.triggerChange) {
            const name = this.getAttribute('name');
            const url = this.getAttribute('url');
            this.triggerChange({
                name,
                url
            });
        }
    }
    mount() {
        const name = this.getAttribute('name');
        const url = this.getAttribute('url');
        ReactDOM.render(<this.LocalWrapper url={url} name={name}/> , this.mountPoint);
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(this);
    }
    disconnectedCallback(){
        this.unmount();
    }
    connectedCallback() {
        this.mountPoint = document.createElement('span');
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.appendChild(this.mountPoint);
        this.mount();
    }

}


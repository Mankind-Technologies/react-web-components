export declare class AppCard extends HTMLElement {
    constructor();
    private mountPoint;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    mount(): void;
    unmount(): void;
    disconnectedCallback(): void;
    connectedCallback(): void;
}

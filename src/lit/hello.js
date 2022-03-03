import { LitElement, html, css } from 'lit';

class Hello extends LitElement {
    static styles = css``;

    render() {
        return html`<div>Hello, World!</div>`;
    }
}

customElements.define('mf-hello', Hello);

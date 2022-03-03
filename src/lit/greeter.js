import { LitElement, html, css } from 'lit';

class Greeter extends LitElement {
    static styles = css`
        b {
            color: red;
        }
    `;

    static properties = {
        name: {},
    };

    render() {
        return html`<div>Hello <b>${this.name}</b>!</div>`;
    }
}

customElements.define('mf-greeter', Greeter);

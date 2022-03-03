import { LitElement, html, css } from 'lit';

class Layouts extends LitElement {
    static styles = css`
        b {
            color: skyblue;
        }
    `;

    static properties = {
        name: {},
    };

    render() {
        return html`<div>This is the layouts page!</div>`;
    }
}

customElements.define('mf-admin-layouts', Layouts);

import { LitElement, html, css } from 'lit';

class Slots extends LitElement {
    static styles = css`
        b {
            color: skyblue;
        }
    `;

    static properties = {
        name: {},
    };

    render() {
        return html`<div>Manage page id to slots mappings</div>`;
    }
}

customElements.define('mf-admin-slots', Slots);

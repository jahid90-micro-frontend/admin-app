import { LitElement, html, css } from 'lit';

class Widgets extends LitElement {
    static styles = css`
        b {
            color: skyblue;
        }
    `;

    static properties = {
        name: {},
    };

    render() {
        return html`<div>Manage page id and slot id to widget mappings</div>`;
    }
}

customElements.define('mf-admin-widgets', Widgets);

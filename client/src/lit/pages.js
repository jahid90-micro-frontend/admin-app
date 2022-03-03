import { LitElement, html, css } from 'lit';

class Pages extends LitElement {
    static styles = css`
        b {
            color: skyblue;
        }
    `;

    static properties = {
        name: {},
    };

    render() {
        return html`<div>Manage page id to layout mappings</div>`;
    }
}

customElements.define('mf-admin-pages', Pages);

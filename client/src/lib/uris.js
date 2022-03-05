import { LitElement, html, css } from 'lit';

class Uris extends LitElement {
    static styles = css`
        b {
            color: skyblue;
        }
    `;

    static properties = {
        name: {},
    };

    render() {
        return html`<div>Manage uri to page id mappings</div>`;
    }
}

customElements.define('mf-admin-uris', Uris);

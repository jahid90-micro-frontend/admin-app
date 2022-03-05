import { LitElement, html, css } from 'lit';

class Home extends LitElement {
    static styles = css``;

    render() {
        return html`<div>Welcome to the home page!</div>`;
    }
}

customElements.define('mf-admin-home', Home);

import { LitElement, html, css } from 'lit';

import { init as pageListInit } from './components/page-list';
import { init as addPageFormInit } from './components/add-page-form';

class Pages extends LitElement {
    constructor() {
        super();
        pageListInit();
        addPageFormInit();
    }

    static styles = css`
        b {
            color: skyblue;
        }
    `;

    static properties = {
        name: {},
    };

    render() {
        return html` <link rel="stylesheet" type="text/css" href="/assets/main.css" />
            <div>
                <h2 class="font-medium text-2xl">Manage pages</h2>
                <mf-component-add-page-form></mf-component-add-page-form>
                <mf-component-page-list></mf-component-page-list>
            </div>`;
    }
}

customElements.define('mf-admin-pages', Pages);

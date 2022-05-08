import { LitElement, html, css } from 'lit';

import { init as layoutListInit } from './components/page-layout-list';
import { init as addLayoutFormInit } from './components/add-page-layout';

class Pages extends LitElement {
    constructor() {
        super();
        layoutListInit();
        addLayoutFormInit();
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
                <h2 class="font-medium text-2xl">Manage page id to layout mappings</h2>
                <mf-component-add-page-layout-form></mf-component-add-page-layout-form>
                <mf-component-page-layout-list></mf-component-page-layout-list>
            </div>`;
    }
}

customElements.define('mf-admin-pages', Pages);

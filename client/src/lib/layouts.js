import { LitElement, html } from 'lit';

import { init as layoutListInit } from './components/layout-list';
import { init as addLayoutFormInit } from './components/add-layout';

class Layouts extends LitElement {
    constructor() {
        super();
        layoutListInit();
        addLayoutFormInit();
    }

    render() {
        return html`
            <link rel="stylesheet" type="text/css" href="/assets/main.css" />
            <div>
                <h2 class="font-medium text-2xl">Manage layouts</h2>
                <mf-component-add-layout-form></mf-component-add-layout-form>
                <mf-component-layout-list></mf-component-layout-list>
            </div>
        `;
    }
}

customElements.define('mf-admin-layouts', Layouts);

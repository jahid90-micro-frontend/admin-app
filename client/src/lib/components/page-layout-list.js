import { LitElement, html } from 'lit';

import { createClient } from '../../client';

class LayoutList extends LitElement {
    static get properties() {
        return {
            layouts: Array,
        };
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchPageLayouts();

        this.layoutAddedListener = window.addEventListener('mf-page-layout-added', this.handleLayoutAdded.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener(this.layoutAddedListener);
    }

    handleLayoutAdded() {
        this.fetchPageLayouts();
    }

    fetchPageLayouts() {
        const client = createClient({ serviceUri: 'http://localhost:5000/pages' });

        client
            .fetchLayouts()
            .then((layouts) => (this.layouts = layouts))
            .catch(() => (this.layouts = null));
    }

    layoutsToHtml() {
        return this.layouts
            ? html`
                  <ul>
                      ${this.layouts.map((l) => html`<li class="px-4 py-1">${l.name}</li>`)}
                  </ul>
              `
            : this.layouts === null
            ? html`<div class="px-4 py-1">Failed to load</div>`
            : html`<div class="px-4 py-1">Loading ...</div>`;
    }

    render() {
        return html`
            <link rel="stylesheet" type="text/css" href="/assets/main.css" />
            <div>
                <h3 class="font-medium text-xl">Current mappings</h3>
                <ul class="flex flex-col">
                    ${this.layoutsToHtml()}
                </ul>
            </div>
        `;
    }
}

export const init = () => {
    customElements.define('mf-component-page-layout-list', LayoutList);
};

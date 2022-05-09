import { LitElement, html } from 'lit';

import { createClient } from '../../client';

class PageList extends LitElement {
    constructor() {
        super();

        this.service = createClient({ serviceUri: 'http://localhost:3000/pages' });
    }

    static get properties() {
        return {
            pages: Array,
        };
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchPages();

        this.pageAddListener = window.addEventListener('mf-page-added', this.handlePageAdded.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener(this.pageAddListener);
    }

    handlePageAdded() {
        this.fetchPages();
    }

    fetchPages() {
        this.service
            .fetchPages()
            .then((pages) => (this.pages = pages))
            .catch(() => (this.pages = null));
    }

    pagesToHtml() {
        return this.pages
            ? html`
                  <ul>
                      ${this.pages.map((p) => {
                          console.log(p);
                          return html`<li class="px-4 py-1"><pre>${p.data.title}</pre></li>`;
                      })}
                  </ul>
              `
            : this.pages === null
            ? html`<div class="px-4 py-1">Failed to load</div>`
            : html`<div class="px-4 py-1">Loading ...</div>`;
    }

    render() {
        return html`
            <link rel="stylesheet" type="text/css" href="/assets/main.css" />
            <div>
                <h3 class="font-medium text-xl">Current pages</h3>
                <ul class="flex flex-col">
                    ${this.pagesToHtml()}
                </ul>
            </div>
        `;
    }
}

export const init = () => {
    customElements.define('mf-component-page-list', PageList);
};

import { LitElement, html } from 'lit';

import { createClient } from '../../client';

class AddPageForm extends LitElement {
    constructor() {
        super();
        this.page = '';

        this.service = createClient({ serviceUri: 'http://localhost:3000/pages' });
    }

    handlePageChange(e) {
        this.page = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();

        this.service
            .addPage({ page: this.page })
            .then(() => window.dispatchEvent(new CustomEvent('mf-page-added')))
            .catch(() => {});

        this.page = '';
        this.renderRoot?.querySelector('form').reset();
    }

    render() {
        return html`
            <link rel="stylesheet" type="text/css" href="/assets/main.css" />
            <div class="my-5">
                <form class="flex-row">
                    <h3 class="font-medium text-xl mb-2">Add pages</h3>
                    <div class="border-2 flex">
                        <input
                            type="text"
                            name="id"
                            id="id"
                            placeholder="id..."
                            class="flex-1 grow focus:border-0 py-2 px-4"
                            @change=${this.handlePageChange}
                        />
                        <button class="border-l-2 w-50 py-2 px-4" type="submit" @click=${this.handleSubmit}>Add</button>
                    </div>

                    <div class="border-2 flex">
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="title..."
                            class="flex-1 grow focus:border-0 py-2 px-4"
                            @change=${this.handlePageChange}
                        />
                        <button class="border-l-2 w-50 py-2 px-4" type="submit" @click=${this.handleSubmit}>Add</button>
                    </div>

                    <div class="border-2 flex">
                        <input
                            type="text"
                            name="layout"
                            id="layout"
                            placeholder="layout..."
                            class="flex-1 grow focus:border-0 py-2 px-4"
                            @change=${this.handlePageChange}
                        />
                        <button class="border-l-2 w-50 py-2 px-4" type="submit" @click=${this.handleSubmit}>Add</button>
                    </div>

                    <div class="border-2 flex">
                        <input
                            type="text"
                            name="slots"
                            id="slots"
                            placeholder="slots..."
                            class="flex-1 grow focus:border-0 py-2 px-4"
                            @change=${this.handlePageChange}
                        />
                        <button class="border-l-2 w-50 py-2 px-4" type="submit" @click=${this.handleSubmit}>Add</button>
                    </div>

                    <div class="border-2 flex">
                        <input
                            type="text"
                            name="add slot"
                            id="add slot"
                            placeholder="add slot..."
                            class="flex-1 grow focus:border-0 py-2 px-4"
                            @change=${this.handlePageChange}
                        />
                        <button class="border-l-2 w-50 py-2 px-4" type="submit" @click=${this.handleSubmit}>Add</button>
                    </div>
                </form>
            </div>
        `;
    }
}

export const init = () => {
    customElements.define('mf-component-add-page-form', AddPageForm);
};

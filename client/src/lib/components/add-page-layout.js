import { LitElement, html } from 'lit';

import { createClient } from '../../client';

class AddLayoutForm extends LitElement {
    constructor() {
        super();
        this.layout = '';
    }

    handleLayoutChange(e) {
        this.layout = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();

        const client = createClient({ serviceUri: 'http://localhost:3000/layouts' });
        client
            .addLayout({ layout: this.layout })
            .then(() => window.dispatchEvent(new CustomEvent('mf-page-layout-form-added')))
            .catch(() => {});

        this.layout = '';
        this.renderRoot?.querySelector('form').reset();
    }

    render() {
        return html`
            <link rel="stylesheet" type="text/css" href="/assets/main.css" />
            <div class="my-5">
                <form class="flex-row">
                    <h3 class="font-medium text-xl mb-2">Add page id to layout mappings</h3>
                    <div class="border-2 flex">
                        <input
                            type="text"
                            name="id"
                            id="id"
                            placeholder="id..."
                            class="flex-1 grow focus:border-0 py-2 px-4"
                            @change=${this.handleLayoutChange}
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
                            @change=${this.handleLayoutChange}
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
                            @change=${this.handleLayoutChange}
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
                            @change=${this.handleLayoutChange}
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
                            @change=${this.handleLayoutChange}
                        />
                        <button class="border-l-2 w-50 py-2 px-4" type="submit" @click=${this.handleSubmit}>Add</button>
                    </div>
                </form>
            </div>
        `;
    }
}

export const init = () => {
    customElements.define('mf-component-add-page-layout-form', AddLayoutForm);
};

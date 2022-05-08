const createEventStoreClient = require('./clients/event-store');

const createHomeApp = require('./home');
const createLayoutsApp = require('./layouts');
const createPagesApp = require('./pages');

const createConfig = ({ env }) => {
    const evsClient = createEventStoreClient({ env });

    const homeApp = createHomeApp({ env, evsClient });
    const layoutsApp = createLayoutsApp({ env, evsClient });
    const pagesApp = createPagesApp({ env, evsClient });

    return {
        homeApp,
        layoutsApp,
        pagesApp,
    };
};

module.exports = createConfig;

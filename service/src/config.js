const createEventStoreClient = require('./clients/event-store');

const createHomeApp = require('./home');
const createLayoutsApp = require('./layouts');

const createConfig = ({ env }) => {
    const eventStoreClient = createEventStoreClient({ env });

    const homeApp = createHomeApp({ env });
    const layoutsApp = createLayoutsApp({ env });

    return {
        eventStoreClient,
        homeApp,
        layoutsApp,
    };
};

module.exports = createConfig;

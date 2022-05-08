const createEventStoreClient = require('./clients/event-store');

const createHomeApp = require('./home');
const createLayoutsApp = require('./layouts');

const createConfig = ({ env }) => {
    const eventStoreClient = createEventStoreClient({ env });

    const homeApp = createHomeApp({ env, evsClient: eventStoreClient });
    const layoutsApp = createLayoutsApp({ env });

    return {
        homeApp,
        layoutsApp,
    };
};

module.exports = createConfig;

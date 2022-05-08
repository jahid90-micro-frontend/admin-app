if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: 'dev.env' });
}

const loadFromEnv = (key) => {
    if (!process.env[key]) {
        console.error(`Required env variable [${key}] is missing`);
        process.exit(1);
    }

    return process.env[key];
};

const createEnv = () => {
    return {
        appName: loadFromEnv('APP_NAME'),
        eventStoreServiceUri: loadFromEnv('EVENT_STORE_SERVICE_URI'),
        port: parseInt(loadFromEnv('PORT'), 10),
    };
};

module.exports = createEnv;

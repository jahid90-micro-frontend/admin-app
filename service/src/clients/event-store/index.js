const axios = require('axios');

const createClient = ({ env }) => {
    const client = axios.create({
        baseURL: env.eventStoreServiceUri,
        timeout: 500,
    });

    return {};
};

module.exports = createClient;

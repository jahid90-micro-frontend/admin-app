const axios = require('axios');

const createClient = ({ env }) => {
    const client = axios.create({
        baseURL: env.eventStoreServiceUri,
        timeout: 500,
    });

    const ping = async () => {
        const result = await client.get('/');

        console.debug(result);

        return result;
    };

    return {
        ping,
    };
};

module.exports = createClient;

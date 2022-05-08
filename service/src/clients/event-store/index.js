const axios = require('axios');

const interceptors = require('../interceptors');

const createClient = ({ env }) => {
    const client = axios.create({
        baseURL: env.eventStoreServiceUri,
        timeout: 500,
    });

    client.interceptors.request.use(interceptors.requestInterceptor, interceptors.requestErrorInterceptor);
    client.interceptors.response.use(interceptors.responseInterceptor, interceptors.responseErrorInterceptor);

    const ping = () => {
        return client
            .get('/ping')
            .then((res) => res.data)
            .catch((err) => err.message);
    };

    return {
        ping,
    };
};

module.exports = createClient;

const axios = require('axios');

const interceptors = require('../interceptors');

const createClient = ({ env }) => {
    const client = axios.create({
        baseURL: env.eventStoreServiceUri,
        timeout: 500,
        headers: { 'x-evs-client-id': env.evsClientId },
    });

    client.interceptors.request.use(interceptors.requestInterceptor, interceptors.requestErrorInterceptor);
    client.interceptors.response.use(interceptors.responseInterceptor, interceptors.responseErrorInterceptor);

    const ping = () => {
        return client.get('/ping').then((res) => res.data);
    };

    const fetchPages = ({ streamName }) => {
        return client.get(`/v1/read/${streamName}`).then((res) => res.data);
    };

    const addNewPage = ({ id, type, streamName, data, metadata }) => {
        return client.post(`/v1/write`, {
            id,
            type,
            streamName,
            data,
            metadata,
        });
    };

    return {
        ping,
        fetchPages,
        addNewPage,
    };
};

module.exports = createClient;

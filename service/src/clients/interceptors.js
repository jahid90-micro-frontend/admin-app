const interceptors = {
    requestInterceptor: (config) => {
        console.debug(`[request] [ok] ${JSON.stringify(config)}`);
        return config;
    },
    requestErrorInterceptor: (error) => {
        console.error(`[request] [fail] ${JSON.stringify(error)}`);
        return Promise.reject(error);
    },
    responseInterceptor: (response) => {
        console.debug(`[response] [ok] ${JSON.stringify(response.data)}`);
        return response;
    },
    responseErrorInterceptor: (error) => {
        console.error(`[response] [fail] ${JSON.stringify(error)}`);
        return Promise.reject(error);
    },
};

module.exports = interceptors;

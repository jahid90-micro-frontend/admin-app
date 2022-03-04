const createHomeApp = require('./home');

const createConfig = ({ env }) => {
    const homeApp = createHomeApp({ env });

    return {
        homeApp,
    };
};

module.exports = createConfig;

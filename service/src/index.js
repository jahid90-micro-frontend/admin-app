const createEnv = require('./env');
const createConfig = require('./config');
const createApp = require('./express');

const createServer = () => {
    const env = createEnv();
    const config = createConfig({ env });
    const app = createApp({ env, config });

    const signalAppStart = () => {
        console.table({ name: env.appName, port: env.port });
    };

    const start = () => {
        app.listen(env.port, signalAppStart);
    };

    return {
        start,
    };
};

module.exports = createServer;
